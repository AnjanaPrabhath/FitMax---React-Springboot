package com.fitmax.fitmax.model;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collation = "posts")
public class Posts {
    @Id
    private int id;
    private String name;
    private String address;
}
