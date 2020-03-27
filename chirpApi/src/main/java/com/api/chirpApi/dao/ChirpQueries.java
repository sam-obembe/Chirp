package com.api.chirpApi.dao;

import com.api.chirpApi.model.Chirp;
import com.api.chirpApi.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;

import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

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

    public List getChirpByString(String chirp){
        List chirps = this.mongoOps.find(query(where("chirp").regex(chirp)),Chirp.class);
        return chirps;
    }

    public List getAllChirpsByUser(String userId){
        List chirps = this.mongoOps.find(query(where("userId").is(userId)),Chirp.class);
        return chirps;
    }

    public List getChirpsFromFollowing(String userId){
        UserData user = this.mongoOps.findById(userId, UserData.class);
        List following = user.getFollowing();

        List chirps = this.mongoOps.find(query(where("userId").in(following)),Chirp.class);
        return chirps;
    }

    public boolean likeChirp(String userId, String chirpId){
        Chirp toLike = this.getChirpById(chirpId);
        this.mongoOps.updateFirst(query(where("_id").is(chirpId)),new Update().push("likers",userId),Chirp.class);
        //toLike.addLiker(userId);
        return true;
    }
}
