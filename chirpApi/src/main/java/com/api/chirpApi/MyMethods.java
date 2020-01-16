package com.api.chirpApi;

import com.api.chirpApi.model.Chirp;
import com.api.chirpApi.model.UserData;

import java.util.HashMap;

public class MyMethods {
    public static HashMap<String,Object> chirpBuilder(Chirp chirp, UserData userDetails){
        HashMap<String,Object> chirpInfo = new HashMap<>();
        chirpInfo.put("chirpData",chirp);
        chirpInfo.put("postedBy",userDetails.cleanUserDetails());
        return chirpInfo;
    }
}
