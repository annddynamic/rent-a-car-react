package api;

public class Response {

    public int sender_id;
    public int receiver_id;
    public Response(int senderID, int receiverID) {
        this.sender_id = senderID;
        this.receiver_id = receiverID;
    }

    public Response() {
        new Response(0, 0);
    }

}