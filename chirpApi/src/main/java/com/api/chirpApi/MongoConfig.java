package com.api.chirpApi;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoConfig {
    //@Value("${spring.data.monogdb.uri}")
    //private String mongoUrl;
    private String username=""; //insert username
    private String password="";  //insert password here

    MongoClientURI uri = new MongoClientURI("mongodb://"+username+":"+password+"@chirpcluster-shard-00-00-zvdoa.mongodb.net:27017,chirpcluster-shard-00-01-zvdoa.mongodb.net:27017,chirpcluster-shard-00-02-zvdoa.mongodb.net:27017/test?ssl=true&replicaSet=ChirpCluster-shard-0&authSource=admin&retryWrites=true&w=majority");

    @Bean
    public MongoClient mongoClient(){
        return new MongoClient(uri);
    }
}

