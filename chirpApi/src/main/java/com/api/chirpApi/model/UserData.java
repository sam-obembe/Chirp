package com.api.chirpApi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection="user")
public class UserData {
    private String userId;
    private String userName;
    private String profilePicture;
    private ArrayList followers;
    private ArrayList following;
    private ArrayList chirps;
    private ArrayList likedChirps;

    public UserData(@JsonProperty("userId") String userId, @JsonProperty("userName") String userName){
        this.userId=userId;
        this.userName=userName;
        this.profilePicture="";
        this.followers = new ArrayList();
        this.following = new ArrayList();
        this.chirps = new ArrayList();
        this.likedChirps = new ArrayList();
    }

    public String getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public ArrayList getFollowers() {
        return followers;
    }

    public ArrayList getFollowing() {
        return following;
    }

    public ArrayList getChirps() {
        return chirps;
    }

    public ArrayList getLikedChirps() {
        return likedChirps;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setFollowers(ArrayList followers) {
        this.followers = followers;
    }

    public void setFollowing(ArrayList following) {
        this.following = following;
    }

    public void setChirps(ArrayList chirps) {
        this.chirps = chirps;
    }

    public void setLikedChirps(ArrayList likedChirps) {
        this.likedChirps = likedChirps;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
}
