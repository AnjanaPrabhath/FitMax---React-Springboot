package com.fitmax.fitmax.repo;

import com.fitmax.fitmax.model.Posts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepo extends MongoRepository<Posts,String>{

}
