package com.api.chirpApi.rest;

import com.api.chirpApi.dao.ChirpQueries;
import com.api.chirpApi.dao.UserQueries;
import com.api.chirpApi.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("users")
public class UserEndPoints {
    private UserQueries userQueries;

    @Autowired
    public UserEndPoints(UserQueries userQ ){
        this.userQueries = userQ;
    }

    @GetMapping("{userId}")
    public ResponseEntity getUserById(@PathVariable("userId") String userId){
        UserData  found = this.userQueries.getUserById(userId);
        if(found!=null){
            return ResponseEntity.status(200).body(found);
        }
        else{
            return ResponseEntity.status(400).body("NO USER FOUND");
        }
    }

    @GetMapping("{userID}/followers")
    public ResponseEntity getFollowers(@PathVariable("userID") String userId){
        List followers = this.userQueries.getFollowersOrFollowing(userId,"followers");
        return ResponseEntity.status(200).body(followers);
    }

    @GetMapping("{userID}/following")
    public ResponseEntity<List> getFollowing(@PathVariable("userID") String userId){
        List following = this.userQueries.getFollowersOrFollowing(userId,"following");
        return ResponseEntity.status(200).body(following);
    }


    @PutMapping("{userID}/{otherUser}/follow")
    public ResponseEntity<String> followOtherUser(@PathVariable("userID") String userId, @PathVariable("otherUser") String otherUser){
        boolean success = this.userQueries.followUser(userId,otherUser);
        if(success==true){
            return ResponseEntity.status(200).body("successfully followed user");
        }
        else{
            return ResponseEntity.status(400).body("could not follow user");
        }
    }

    @PutMapping("{userID}/{otherUser}/unfollow")
    public ResponseEntity unfollowOtherUser(@PathVariable("userID") String userId, @PathVariable("otherUser") String otherUser){
        boolean success = this.userQueries.unfollowUser(userId,otherUser);
        if(success==true){
            return ResponseEntity.status(200).body("successfully unfollowed user");
        }
        else{
            return ResponseEntity.status(400).body("could not complete action");
        }
    }
}
