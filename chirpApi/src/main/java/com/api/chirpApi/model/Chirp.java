package com.api.chirpApi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.UUID;
@Document(collection="chirps")
public class Chirp {

    @Id
    private String chirpId;
    private String userId;
    private String chirp;
    private LocalDateTime timeStamp;
    private ArrayList imgUrls;
    private ArrayList likers;
    private ArrayList replies;
    private String replyingTo;

    public Chirp(@JsonProperty("userId") String userId, @JsonProperty("chirp") String chirp,
                 @JsonProperty("imgUrls") ArrayList imgUrls, @JsonProperty("replying") String replyingTo){
        this.replies = new ArrayList();
        this.likers = new ArrayList();
        this.userId = userId;
        this.chirp = chirp;
        this.replyingTo = replyingTo;
        DateTimeFormatter dateTime = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        this.timeStamp = LocalDateTime.now();
        this.chirpId = UUID.randomUUID().toString();
        if(imgUrls.size()>0 && imgUrls.size()<5){
            this.imgUrls=imgUrls;
        }
        else{
            this.imgUrls=null;
        }
    }

    public String getChirpId() {
        return chirpId;
    }

    public String getUserId() {
        return userId;
    }

    public String getChirp() {
        return chirp;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public ArrayList getImgUrls() {
        return imgUrls;
    }

    public ArrayList getLikers() {
        return likers;
    }

    public ArrayList getReplies() {
        return replies;
    }

    public String getReplyingTo() {
        return replyingTo;
    }

    public boolean addLiker(String userId){
        this.likers.add(userId);
        return true;
    }

}
