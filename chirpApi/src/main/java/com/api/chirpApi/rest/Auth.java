package com.api.chirpApi.rest;

import com.api.chirpApi.dao.AuthQueries;
import com.api.chirpApi.model.UserData;
import com.api.chirpApi.model.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("auth")
public class Auth {
    AuthQueries authQuery;

    @Autowired
    public Auth(AuthQueries authQueries){
        this.authQuery=authQueries;
    }

    //@CrossOrigin(origins="http://localhost:4200")
    @PostMapping("register")
    public ResponseEntity register(@RequestBody UserData userData){
        String userId = userData.getUserId();
        String userName = userData.getUserName();
        UserData registeredUser = new UserData(userId,userName);
        boolean success = this.authQuery.addUser(registeredUser);
        if(success==true){
            return ResponseEntity.status(200).body(registeredUser);
        }
        else{
            return ResponseEntity.status(400).body("user already exists");
        }

    }

    /*@PostMapping("login")
    public ResponseEntity login(@RequestBody UserLogin userDetails){
        return ResponseEntity.status(200).body(userDetails);
    }*/

    @PostMapping("login")
    public ResponseEntity login(@RequestBody UserData userData){
        String userID = userData.getUserId();
        UserData user = this.authQuery.getUser(userID);
        if(user.getUserId()==userID){
            return ResponseEntity.status(200).body(user);
        }
        else{
            return ResponseEntity.status(400).body("NOT FOUND");
        }
    }
}
