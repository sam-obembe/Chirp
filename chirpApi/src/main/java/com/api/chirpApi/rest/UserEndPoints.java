package com.api.chirpApi.rest;

import com.api.chirpApi.dao.UserQueries;
import com.api.chirpApi.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("users")
public class UserEndPoints {
    private UserQueries userQueries;

    @Autowired
    public UserEndPoints(UserQueries userQ){
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
        ArrayList followers = this.userQueries.getFollowers(userId);
        return ResponseEntity.status(200).body(followers);
    }

    @GetMapping("{userID}")
    public void getFollowing(@PathVariable("userID") String userId){

    }


    @PostMapping("{userID}/{otherUser}/follow")
    public void followOtherUser(@PathVariable("userID") String userId,@PathVariable("otherUser") String otherUser){

    }

    @PostMapping("{userID}/{otherUser}/unfollow")
    public void unfollowOtherUser(@PathVariable("userID") String userId, @PathVariable("otherUser") String otherUser){

    }
}
