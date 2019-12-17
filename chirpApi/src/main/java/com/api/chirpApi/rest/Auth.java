package com.api.chirpApi.rest;

import com.api.chirpApi.model.UserData;
import com.api.chirpApi.model.UserLogin;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class Auth {

    @PostMapping("register")
    public ResponseEntity register(@RequestBody UserData userData){
        String userId = userData.getUserId();
        String userName = userData.getUserName();
        UserData registeredUser = new UserData(userId,userName);
        return ResponseEntity.status(200).body(registeredUser);
    }

    @PostMapping("login")
    public ResponseEntity login(@RequestBody UserLogin userDetails){
        return ResponseEntity.status(200).body(userDetails);
    }
}
