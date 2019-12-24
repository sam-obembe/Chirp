package com.api.chirpApi.dao;

import com.api.chirpApi.model.Chirp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

@Service
public class ChirpQueries {
    private MongoOperations mongoOps;
    @Autowired
    public ChirpQueries(MongoOperations mongoOps){
        this.mongoOps = mongoOps;
    }

    public Chirp getChirpById(String id){
        Chirp foundChirp = this.mongoOps.findById(id,Chirp.class);
        if (foundChirp.getChirpId() != null) {
            return foundChirp;
        }
        else{
            return null;
        }
    }

    public boolean chirpExists(String id){
        Chirp foundChirp = this.mongoOps.findById(id,Chirp.class);
        if(foundChirp.getChirpId() != null){
            return true;
        }
        else{
            return false;
        }
    }

    public boolean addChirp(Chirp chirp){
        this.mongoOps.insert(chirp);
        if(chirpExists(chirp.getChirpId())){
            return true;
        }
        else{
            return false;
        }
    }
}
