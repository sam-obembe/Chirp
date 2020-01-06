package com.api.chirpApi.dao;

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

    public List getFollowersOrFollowing(String id,String condition){
        UserData user = this.getUserById(id);
        List followers = new ArrayList();
        if(condition.equals("followers")){
            followers = user.getFollowers();
        }
        else if(condition.equals("following")){
            followers = user.getFollowing();
        }
        List followerDetails = new ArrayList();

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

    public boolean addChirpIdToList(String chirpId,String userId){
        try{
            this.mongoOp.updateFirst(
                    new Query(where("_id").is(userId)),
                    new Update().push("chirps",chirpId),
                    UserData.class
            );
            return true;
        }
        catch(Exception e){
            return false;
        }

    }

    public boolean followUser(String userId, String userToFollowID){
        try{
        this.mongoOp.updateFirst(
                new Query(where("_id").is(userId)),
                new Update().addToSet("following",userToFollowID),UserData.class
                //new Update().push("following",userToFollowID),UserData.class
        );

        this.mongoOp.updateFirst(
                new Query(where("_id").is(userToFollowID)),
                new Update().addToSet("followers",userId),UserData.class
        );

        return true;
        }
        catch(Exception e){
            return false;
        }
    }

    public boolean unfollowUser(String userId, String userToUnfollowID){
        try{
            this.mongoOp.updateFirst(
                    new Query(where("_id").is(userId)),
                    new Update().pull("following",userToUnfollowID),UserData.class
            );

            this.mongoOp.updateFirst(
                    new Query(where("_id").is(userToUnfollowID)),
                    new Update().pull("followers",userId),UserData.class
            );
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}

/*(
    where("accounts.accountType").is(Account.Type.SAVINGS)),
         new Update().inc("accounts.$.balance", 50.00), Account.class);

 */