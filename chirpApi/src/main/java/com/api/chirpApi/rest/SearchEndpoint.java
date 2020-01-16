package com.api.chirpApi.rest;

import com.api.chirpApi.MyMethods;
import com.api.chirpApi.dao.ChirpQueries;
import com.api.chirpApi.dao.UserQueries;
import com.api.chirpApi.model.Chirp;
import com.api.chirpApi.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
        List chirpResultsToSend = new ArrayList();
        chirpResults.forEach(chirp->{
            Chirp casted = (Chirp) chirp;
            UserData user = this.userQueries.getUserById(casted.getUserId());
            HashMap chirpInfo = MyMethods.chirpBuilder(casted,user);
            chirpResultsToSend.add(chirpInfo);
        });
        HashMap<String,List> results = new HashMap<>();
        results.put("users",userResults);
        results.put("chirps",chirpResultsToSend);
        return ResponseEntity.status(200).body(results);
    }
}
