package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.example3.entity.Post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostRepository extends JpaRepository<Post, Long> {
    Page<Post> findAll(Pageable pageable);
}
