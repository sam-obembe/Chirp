package com.api.chirpApi.rest;

import com.api.chirpApi.dao.ChirpQueries;
import com.api.chirpApi.dao.UserQueries;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("search")
public class SearchEndpoint {
    private UserQueries userQueries;
    private ChirpQueries chirpQueries;

    @Autowired
    public SearchEndpoint(UserQueries userQ, ChirpQueries chirpQ){
        this.userQueries = userQ;
        this.chirpQueries = chirpQ;
    }
    @GetMapping("{searchString}")
    public ResponseEntity search(@PathVariable("searchString") String searchString){
        List userResults = this.userQueries.getUsersByUsername(searchString);
        List chirpResults = this.chirpQueries.getChirpByString(searchString);
        HashMap<String,List> results = new HashMap<>();
        results.put("users",userResults);
        results.put("chirps",chirpResults);
        return ResponseEntity.status(200).body(results);
    }
}
