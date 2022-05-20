package chat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import message.Message;
import message.MessageType;
import User.User;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.*;

public class ChatServer extends WebSocketServer {

    private final static Logger logger = LogManager.getLogger(ChatServer.class);

    private HashMap<WebSocket, User> users;

    private Set<WebSocket> conns;

    private ChatServer(int port) {
        super(new InetSocketAddress(port));
        conns = new HashSet<>();
        users = new HashMap<>();
    }


}