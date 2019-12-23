package com.api.chirpApi.dao;

import com.api.chirpApi.model.UserData;
import com.google.gson.Gson;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.bson.Document;
import com.mongodb.client.model.Filters;

import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.*;

@Service
public class AuthQueries {

    private MongoClient mongoClient;
    private MongoOperations mongoOps;
    private MongoDatabase db;
    private Gson gson;
    private MongoCollection userCollection;

    @Autowired
    public AuthQueries(MongoClient mongoClient, MongoOperations mongoOps){
        this.mongoClient=mongoClient;
        this.mongoOps=mongoOps;
        this.db=mongoClient.getDatabase("chirpProject");
        this.gson = new Gson();
        this.userCollection = db.getCollection("user");
    }

    public boolean userExists(String userId){

        UserData user = mongoOps.findById(userId,UserData.class);
        if(user.getUserId().length()>0){
            return true;
        }
        else {
            return false;
        }
    }

    public boolean addUser(UserData user){
        System.out.println(user.toString());
        mongoOps.insert(user);
        return true;

    }

    public UserData getUser(String userId){
        System.out.println(userId);
        UserData foundUser;

        foundUser = mongoOps.findById(userId,UserData.class);
        return foundUser;

    }
}


        /*Document userDocument = Document.parse(gson.toJson(user));
        boolean userFound = this.userExists(user.getUserId());

        if(userFound==false){
            try {
                //db.getCollection("user").insertOne(userDocument);
                userCollection.insertOne(userDocument);
                mongoClient.close();
                return true;
            }
            catch(Exception e){
                return false;
            }
        }
        else{
            mongoClient.close();
            return false;
        }*/


        /*try{
            FindIterable<Document> userResult = userCollection.find(eq("userId",userId)).projection(new Document("userId",1)
                    .append("userName",1).append("profilePicture",1).append("followers",1).append("following",1).append("chirps",1).append("likedChirps",1)
            );
            Document user = userResult.first();
            UserData userData = gson.fromJson(user.toJson(),UserData.class);
            System.out.println(user.toJson());
            System.out.println(userData.toJson());
            return userData;
        }
        catch(Exception e){
            throw e;
        }*/

//FindIterable<Document> queryResult = db.getCollection("user").find(eq("userId",userId));
  /*
        List results = new ArrayList();
        for(Document res:queryResult){
            results.add(res);
        }
        if(results.size()>0){
            return true;
        }
        else{
            return false;
        }
 */