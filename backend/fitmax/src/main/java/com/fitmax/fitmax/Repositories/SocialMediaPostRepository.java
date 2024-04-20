package com.fitmax.fitmax.Repositories;

import dev.paf.FitFusion.Models.SocialMediaPost;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocialMediaPostRepository extends MongoRepository<SocialMediaPostRepository, ObjectId> {

}
