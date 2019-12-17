package com.api.chirpApi.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("test")
@RestController
public class Test {
    @GetMapping
    public String getTest(){
        return "I am working";
    }
}
