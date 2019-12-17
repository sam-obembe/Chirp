package com.api.chirpApi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserLogin {
    String email;
    String password;
    public UserLogin(@JsonProperty("email") String email,
                     @JsonProperty("password") String password){
        this.email = email;
        this.password=password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
