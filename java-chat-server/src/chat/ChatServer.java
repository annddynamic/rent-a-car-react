package chat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import message.Message;
import message.MessageType;
import User.User;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import Database.DatabaseConnection;

import javax.xml.crypto.Data;
import java.io.Console;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;

public class ChatServer extends WebSocketServer {

    private HashMap<WebSocket, User> users;

    private Set<WebSocket> conns;

    private ChatServer(int port) {
        super(new InetSocketAddress(port));
        conns = new HashSet<>();
        users = new HashMap<>();
    }

    @Override
    public void onOpen(WebSocket webSocket, ClientHandshake clientHandshake) {
        conns.add(webSocket);
        System.out.println("Funksioni onOpen " + conns);
        System.out.println("New connection from " + webSocket.getRemoteSocketAddress().getAddress().getHostAddress());
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        conns.remove(conn);
        // When connection is closed, remove the user.
        try {
            removeUser(conn);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        System.out.println("Closed connection to " + conn.getRemoteSocketAddress().getAddress().getHostAddress());
    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        System.out.println(message);
        ObjectMapper mapper = new ObjectMapper();
        try {
            Message msg = mapper.readValue(message, Message.class);
            System.out.println(msg.getUser());
            switch (msg.getType()) {
                case USER_JOINED:
                    addUser(new User(msg.getUser().getName(), msg.getUser().getId()), conn);
                    break;
                case USER_LEFT:
                    removeUser(conn);
                    break;
                case TEXT_MESSAGE:
                    broadcastMessage(msg);
            }
            System.out.println("Message from user: " + msg.getUser() + ", text: " + msg.getData() + ", type:" + msg.getType());
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {
        if (conn != null) {
            conns.remove(conn);
        }
        assert conn != null;
        System.out.println("ERROR from " + conn.getRemoteSocketAddress().getAddress().getHostAddress());
    }

    private void broadcastMessage(Message msg) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            String messageJson = mapper.writeValueAsString(msg);
            if (msg.getTo()!=null){
                Set<WebSocket> peersSockets = getPeers(users, msg.getTo());
                for (WebSocket sock : peersSockets) {
                    sock.send(messageJson);
                }
                return;
            }
            for (WebSocket sock : conns) {
                sock.send(messageJson);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    private void addUser(User user, WebSocket conn) throws JsonProcessingException, SQLException {
        users.put(conn, user);
        System.out.println("Emri: "+ user.getName()+ "Id: "+ user.getId());
        acknowledgeUserJoined(user, conn);
        broadcastUserActivityMessage(MessageType.USER_JOINED);
        DatabaseConnection dbConnection = DatabaseConnection.getInstance();
        dbConnection.addUserDatabase(user);
    }

    private void removeUser(WebSocket conn) throws JsonProcessingException {
        users.remove(conn);
        broadcastUserActivityMessage(MessageType.USER_LEFT);
    }

    private void acknowledgeUserJoined(User user, WebSocket conn) throws JsonProcessingException {
        Message message = new Message();
        message.setType(MessageType.USER_JOINED_ACK);
        message.setUser(user);
        conn.send(new ObjectMapper().writeValueAsString(message));
    }

    private void broadcastUserActivityMessage(MessageType messageType) throws JsonProcessingException {
        Message newMessage = new Message();
        ObjectMapper mapper = new ObjectMapper();
        String data = mapper.writeValueAsString(users.values());
        newMessage.setData(data);
        newMessage.setType(messageType);
        broadcastMessage(newMessage);
    }

    public static Set<WebSocket>  getPeers(HashMap<WebSocket, User> hmap, User[] users) {
        Set<WebSocket> peerSockets= new HashSet<>();
        for (Map.Entry<WebSocket, User> entry : hmap.entrySet()) {
            for (User user : users) {
                if(Objects.equals(user.getId(), entry.getValue().getId())) {
                    peerSockets.add(entry.getKey());
                }
            }
        }
        return  peerSockets;
    }

    public static void main(String[] args)  {
        new ChatServer(9000).start();
//        DatabaseConnection conn = DatabaseConnection.getInstance();
//
////        Statement stmt = con.createStatement();
//        String QUERY = "SELECT * FROM chat";
//        ResultSet rs = stmt.executeQuery(QUERY);
//        while(rs.next()) {
//            //Display values
//            System.out.print("Sender: " + rs.getInt("sender_id"));
//            System.out.print("Receiver: " + rs.getInt("receiver_id"));
//        }
    }
}