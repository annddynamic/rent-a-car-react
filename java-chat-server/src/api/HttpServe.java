package api;

import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

public class HttpServe {
    public HttpServe(int port)  {
        try {
            ThreadPoolExecutor threadPool = (ThreadPoolExecutor)
                    Executors.newFixedThreadPool(15);
            HttpServer server = HttpServer.create(
                    new InetSocketAddress("localhost", port), 0
            );
            server.setExecutor(threadPool);

            server.createContext("/messages", new MessageHttpHandler());

            server.start();
            System.out.println("Server started...");
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
