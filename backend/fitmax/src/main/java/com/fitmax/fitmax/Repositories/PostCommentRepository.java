package com.fitmax.fitmax.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fitmax.fitmax.controller.PostCommentController;

@Repository
public interface PostCommentRepository extends MongoRepository<PostCommentController, ObjectId> {

}
