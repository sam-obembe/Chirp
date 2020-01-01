package com.api.chirpApi.rest;

import com.api.chirpApi.dao.UserQueries;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("search")
public class Search {
    private UserQueries userQueries;

    @Autowired
    public Search(UserQueries userQ){
        this.userQueries = userQ;
    }
    @GetMapping("{searchString}")
    public ResponseEntity search(@PathVariable("searchString") String searchString){
        List results = this.userQueries.getUsersByUsername(searchString);
        return ResponseEntity.status(200).body(results);
    }
}
