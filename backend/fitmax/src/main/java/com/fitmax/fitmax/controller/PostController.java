package com.fitmax.fitmax.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/Post")
@CrossOrigin

public class PostController {
      @GetMapping("/getPost")
    public String getPost() {
          return "Hello World";
      }

    @PostMapping("/savePost")
    public String SavePost(){

          return "Post Saved";
    }

//    @PutMapping("/updatePost")
//    public String updatePost() {
//
//        return "Post Updated";
//    }
//    @DeleteMapping("/deletePost")
//    public String deletePost() {
//
//        return "Post Deleted";
//    }
//
//}
