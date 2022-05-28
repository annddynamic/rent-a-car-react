package Database;
import User.User;

import java.sql.*;

public class DatabaseConnection {

    private static DatabaseConnection connObject;
    private Connection conn;
    private DatabaseConnection(){
        setDbConnection();
    }
    public static DatabaseConnection getInstance() {
        // create object if it's not already created
        if(connObject == null) {
            connObject= new DatabaseConnection();
        }

        // returns the singleton object
        return connObject;
    }
    private void setDbConnection() {
        try {
            // db parameters
            String url = "jdbc:sqlite:chat.sql";
            // create a connection to the database
            this.conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void addUserDatabase(User user) throws SQLException {
        ResultSet rs = selectFromDatabase("select * from users where id = '"+ user.getId()+"'");
        if (!rs.next()){
            String query = " insert into users (id, name) values (?, ?)";
            PreparedStatement preparedStmt = this.conn.prepareStatement(query);
            preparedStmt.setString (1, user.getId());
            preparedStmt.setString (2,user.getName());
            // execute the preparedstatement
            preparedStmt.execute();
        }
    }

    public void addMessageDatabase(String senderId, String receiverId, String message) throws SQLException{
        String query = "insert into message (sender_id, receiver_id, message) values (?, ?, ?)";
        PreparedStatement preparedStmt = this.conn.prepareStatement(query);
        preparedStmt.setString (1, senderId);
        preparedStmt.setString (2,receiverId);
        preparedStmt.setString (3,message);
        // execute the preparedstatement
        preparedStmt.execute();
    }

    public ResultSet getMessagesDatabase(String senderId, String receiverId) throws SQLException{
        Statement stmt = this.conn.createStatement();
        String query = "select * from message where " +
                       "sender_id = '"+senderId+"' or receiver_id = '"+senderId+"'"+
                       "or sender_id = '"+receiverId+"' or receiver_id = '"+receiverId+"'";
        return  stmt.executeQuery(query);
    }

    private ResultSet selectFromDatabase(String query) throws SQLException{
        Statement stmt = this.conn.createStatement();
        return  stmt.executeQuery(query);
    }


}
