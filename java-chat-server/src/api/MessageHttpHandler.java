package api;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MessageHttpHandler  implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange){
        // leximi i tipit te kerkeses / GET|POST|PUT|DELETE
        try {
            String method = exchange.getRequestMethod();
            if (method.equals("GET")) {
                System.out.println("UserHttpHandler get");
                this.handleGetRequest(exchange);
            }
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    private void handleGetRequest(HttpExchange exchange) throws IOException {
        BufferedReader httpInput = new BufferedReader(new InputStreamReader(exchange.getRequestBody(), "UTF-8"));

        JSONProcessor responseJsonProcessor = new JSONProcessor<Response>(Response.class);
        Response responseJson = (Response) responseJsonProcessor.deserialize(httpInput);

        System.out.println(responseJson.sender_id);

//
//        OutputStream out = exchange.getResponseBody();
//
//        //Statusi: 200, 201,
//        exchange.getResponseHeaders().set("Content-Type", "application/json");
//        exchange.sendResponseHeaders(200, userJsonString.length());
//        out.write(userJsonString.getBytes());
//        out.flush();
//        out.close();
    }
}



