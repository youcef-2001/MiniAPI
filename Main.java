//create a web server that is handling apis like this https://zululu.netlify.app/?account_verification_report_id=c0bb217f7a2a4882a0094fbd73c43d08
// the server will be deployed in netlify 
// in addition of returnin a response in json format with the variable account_verification_report_id,  

// render an html content to the client side displaying hello world 
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;


import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;


public class Main {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new MyHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
    }

    static class MyHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            String response = "Hello World!";
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}