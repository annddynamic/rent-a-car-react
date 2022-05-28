package api;

import Database.DatabaseConnection;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpsExchange;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.xml.crypto.Data;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;

public class MessageHttpHandler  implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange){
        // leximi i tipit te kerkeses / GET|POST|PUT|DELETE
        try {

            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            String method = exchange.getRequestMethod();
            if (method.equalsIgnoreCase("OPTIONS")) {
                exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, OPTIONS");
                exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type,Authorization");
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            if (method.equals("POST")) {
                System.out.println("UserHttpHandler POST");
                this.handleGetRequest(exchange);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    private void handleGetRequest(HttpExchange exchange) throws Exception {
        BufferedReader httpInput = new BufferedReader(new InputStreamReader(exchange.getRequestBody(), "UTF-8"));
        JSONProcessor jsonProc = new JSONProcessor<Response>(Response.class);
        Response responseJson = (Response) jsonProc.deserialize(httpInput);
        DatabaseConnection dbConn =DatabaseConnection.getInstance();
        JSONArray response = jsonProc.convert(dbConn.getMessagesDatabase(responseJson.sender_id, responseJson.receiver_id));


        byte[] bs = response.toString().getBytes("UTF-8");
        exchange.sendResponseHeaders(200, bs.length);
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        OutputStream os = exchange.getResponseBody();
        os.write(bs);

        os.flush();
        os.close();
    }
}



