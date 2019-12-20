package com.api.chirpApi;


import com.mongodb.client.MongoClient;

import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoConfig {

    String uri;;

    @Bean
    public MongoClient mongoClient(){
        this.uri = "";
        MongoClient mongo = MongoClients.create(uri);
        return mongo;
    }

}

