package com.api.chirpApi.rest;

import com.api.chirpApi.model.Chirp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("chirp")
public class ChirpEndpoints {

    @PostMapping
    public ResponseEntity postChirp(@RequestBody Chirp chirpData){

        return ResponseEntity.status(200).body(chirpData);
    }
}
