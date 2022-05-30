package api;

public class Response {

    public String sender_id;
    public String  receiver_id;
    public Response() {
        new Response("", "");
    }

    public Response(String senderID, String receiverID) {
        this.sender_id = senderID;
        this.receiver_id = receiverID;
    }

}