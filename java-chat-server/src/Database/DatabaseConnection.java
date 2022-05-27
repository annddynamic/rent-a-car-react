package Database;
import User.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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
        // the mysql insert statement
        System.out.println(user);
        String query = " insert into users (id, name) values (?, ?)";
        PreparedStatement preparedStmt = this.conn.prepareStatement(query);
        preparedStmt.setString (1, user.getId());
        preparedStmt.setString (2,user.getName());

        // execute the preparedstatement
        preparedStmt.execute();
        this.conn.close();
    }
}
