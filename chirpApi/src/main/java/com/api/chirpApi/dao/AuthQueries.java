package com.api.chirpApi.dao;

import com.api.chirpApi.model.UserData;
import com.google.gson.Gson;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;
import org.bson.Document;
import com.mongodb.client.model.Filters;

import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.*;

@Service
public class AuthQueries {

    private MongoClient mongoClient;
    private MongoDatabase db;
    private Gson gson;

    @Autowired
    public AuthQueries(MongoClient mongoClient){
        this.mongoClient=mongoClient;
        this.db=mongoClient.getDatabase("chirpProject");
        this.gson = new Gson();
    }

    public boolean userExists(String userId){
        FindIterable<Document> queryResult = db.getCollection("user").find(eq("userId",userId));
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

    }

    public boolean addUser(UserData user){
        Document userDocument = Document.parse(gson.toJson(user));
        boolean userFound = this.userExists(user.getUserId());

        if(userFound==false){
            try {
                db.getCollection("user").insertOne(userDocument);
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
        }

    }
}
