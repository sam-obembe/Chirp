package com.api.chirpApi.dao;

import com.api.chirpApi.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;



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

    public List getUsersByUsername(String username){

        //List result = mongoOp.find(query(where("userName").is(username)),UserData.class);
        List result = mongoOp.find(query(where("userName").regex(username)),UserData.class);
        return result;
    }

    public List getFollowersOrFollowing(String id, String followersOrFollowing){
        UserData user = this.getUserById(id);
        List people;
        if(followersOrFollowing.equals("followers")){
            people = user.getFollowers();
            return people;
        }else if(followersOrFollowing.equals("following")){
            people = user.getFollowing();
            return people;
        }
        people = new ArrayList();
        return people;
    }

    /*
    public List getFollowing(String id){
        UserData user = this.getUserById(id);
        List following = user.getFollowing();
    }
     */
}
