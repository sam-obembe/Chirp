package com.api.chirpApi.dao;

import com.api.chirpApi.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserQueries {
    private MongoOperations mongoOp;

    @Autowired
    public UserQueries(MongoOperations mongoOperations){
        this.mongoOp = mongoOperations;
    }

    public UserData getUserById(String id){
        UserData foundUserFromDB = this.mongoOp.findById(id,UserData.class);
        if(foundUserFromDB != null){
            return foundUserFromDB;
        }
        else{
            return null;
        }
    }

    public ArrayList getFollowers(String id){
        UserData user = this.getUserById(id);
        ArrayList followers = user.getFollowers();
        ArrayList followerDetails = new ArrayList();

        followers.forEach(follower->{
            UserData foundFollower = this.mongoOp.findById(follower,UserData.class);
            followerDetails.add(foundFollower);
        });
        return followerDetails;
    }
}
