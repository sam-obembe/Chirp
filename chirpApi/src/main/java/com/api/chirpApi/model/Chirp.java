package com.api.chirpApi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.UUID;

public class Chirp {
    private UUID chirpId;
    private String userId;
    private String chirp;
    private LocalDateTime timeStamp;
    private String[] imgUrls;
    private ArrayList likers;
    private ArrayList replies;
    private String replyingTo;

    public Chirp(@JsonProperty("userId") String userId, @JsonProperty("chirp") String chirp,
                 @JsonProperty("imgUrls") String[] imgUrls, @JsonProperty("replying") String replyingTo){
        this.replies = new ArrayList();
        this.likers = new ArrayList();
        this.userId = userId;
        this.chirp = chirp;
        this.replyingTo = replyingTo;
        DateTimeFormatter dateTime = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        this.timeStamp = LocalDateTime.now();
        this.chirpId = UUID.randomUUID();
        if(imgUrls.length>0 && imgUrls.length<5){
            this.imgUrls=imgUrls;
        }
        else{
            this.imgUrls=null;
        }
    }

    public UUID getChirpId() {
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

    public String[] getImgUrls() {
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

}
