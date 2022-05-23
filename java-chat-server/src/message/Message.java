package message;

import User.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Message implements Serializable {

    private User user;
    private MessageType type;
    private String data;
    private User[] to;

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    public void setTo(User[] to) {
        this.to = to;
    }

    public User[] getTo() {
        return this.to;
    }
}


