package api;

public class Request {

    public String sender_id;
    public String  receiver_id;
    public Request() {
        new Request("", "");
    }

    public Request(String senderID, String receiverID) {
        this.sender_id = senderID;
        this.receiver_id = receiverID;
    }

}