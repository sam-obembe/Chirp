package com.api.chirpApi.rest;

import com.api.chirpApi.dao.ChirpQueries;
import com.api.chirpApi.dao.UserQueries;
import com.api.chirpApi.model.Chirp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("chirp")
public class ChirpEndpoints {
    ChirpQueries chirpQueries;
    UserQueries userQueries;

    @Autowired
    public ChirpEndpoints(ChirpQueries chirpQ, UserQueries userQ) {
        this.chirpQueries = chirpQ;
        this.userQueries = userQ;
    }

    @PostMapping
    public ResponseEntity postChirp(@RequestBody Chirp chirpData) {
        boolean chirpAdded = this.chirpQueries.addChirp(chirpData);
        if (chirpAdded == true) {
            return ResponseEntity.status(200).body(chirpData);
        } else {
            return ResponseEntity.status(400).body("unable to add chirp");
        }
    }

    @GetMapping("{chirpId}")
    public ResponseEntity getChirpByID(@PathVariable String chirpId){
        Chirp foundChirp = this.chirpQueries.getChirpById(chirpId);
        return ResponseEntity.status(200).body(foundChirp);
    }

    @GetMapping("{userId}/feed")
    public ResponseEntity getNewsFeed(@PathVariable String userId){
        List following = this.userQueries.getFollowersOrFollowing(userId,"following");
        this.chirpQueries.getChirpsFromFollowing(following);
        return ResponseEntity.status(200).body("feed");
    }
}
