package com.example.example3.controller;

import lombok.AllArgsConstructor;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.example3.entity.Post; // Import the Post entity
import com.example.example3.service.PostService; // Import the PostService

@RestController
@AllArgsConstructor
@RequestMapping("api/posts") // Change the path to "api/posts"
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
public class PostController {

    private PostService postService; // Rename the service

    // Create Post REST API
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post post) { // Rename the method
        post.setImage(post.getImage() + ".png");
        Post savedPost = postService.createPost(post); // Rename the service method
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }

    @PostMapping("/image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file,
            @RequestParam("customName") String customName) {
        try {
            String uploadDir = "src/main/resources/static/dataImage"; // Set your desired directory path

            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String filePath = uploadDir + File.separator + customName + ".png";

            try (FileOutputStream fos = new FileOutputStream(filePath)) {
                fos.write(file.getBytes());
            }
            return ResponseEntity.ok("Image uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image");
        }
    }

    @GetMapping("/image/{imageName}")
    public ResponseEntity<byte[]> getImage(@PathVariable String imageName) throws IOException {

        Resource resource = new ClassPathResource("static/dataImage/" + imageName);
        byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Set the appropriate image media type

        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    // Get Post by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Post> getPostById(@PathVariable("id") Long postId) { // Rename the method and parameter
        Post post = postService.getPostById(postId); // Rename the service method
        if (post != null) {
            return new ResponseEntity<>(post, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get All Posts REST API
    @GetMapping
    public ResponseEntity<Page<Post>> getAllPosts(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Post> posts = postService.getAllPosts(pageable); // Rename the service method
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    // Update Post REST API
    @PutMapping("{id}")
    public ResponseEntity<Post> updatePost(@PathVariable("id") Long postId,
            @RequestBody Post post) { // Rename the method and parameter
        post.setId(postId);
        Post updatedPost = postService.updatePost(post); // Rename the service method
        return new ResponseEntity<>(updatedPost, HttpStatus.OK);
    }

    // Delete Post REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") Long postId) { // Rename the parameter
        postService.deletePost(postId); // Rename the service method
        return new ResponseEntity<>("Post successfully deleted!", HttpStatus.OK);
    }
}
