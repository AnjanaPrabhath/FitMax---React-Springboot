package com.fitmax.fitmax.service;

import com.fitmax.fitmax.model.Posts;
import com.fitmax.fitmax.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepo postRepo;

    @Override
    public int save(Posts posts) {
        return postRepo.save(posts).getId();

    }
}
