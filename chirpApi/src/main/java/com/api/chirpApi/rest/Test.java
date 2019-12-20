package com.api.chirpApi.rest;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("test")
@RestController
public class Test {
    private MongoClient mongoClient;
    private MongoDatabase db;
    @Autowired
    public Test(MongoClient mongoClient) {
        this.mongoClient=mongoClient;
        this.db = mongoClient.getDatabase("chirpProject");
    }

    @GetMapping
    public String getTest(){
        String databases = mongoClient.listDatabases().toString();
        MongoIterable collections = this.db.listCollectionNames();
        mongoClient.close();
        return databases;
    }
}
