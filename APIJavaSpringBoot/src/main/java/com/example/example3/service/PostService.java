package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.Post;

public interface PostService {
    Post createPost(Post post);

    Post getPostById(Long postId);

    Page<Post> getAllPosts(Pageable pageable);

    Post updatePost(Post post);

    void deletePost(Long postId);
    
}
