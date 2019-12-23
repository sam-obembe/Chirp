package com.api.chirpApi;


import com.mongodb.client.MongoClient;

import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfig {

    String uri;

    @Bean
    public MongoClient mongoClient(){
        this.uri = "";
        MongoClient mongo = MongoClients.create(uri);
        return mongo;
    }

    @Bean
    public MongoOperations mongoOps(){
        return new MongoTemplate(mongoClient(),"chirpProject");
    }

}

