package com.example.example3.controller;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.example3.entity.Topic; // Import the Topic entity
import com.example.example3.service.TopicService; // Import the TopicService

@RestController
@AllArgsConstructor
@RequestMapping("api/topics")  // Change the path to "api/topics"
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")

public class TopicController {

    private TopicService topicService;  // Replace CategoryService with TopicService

    // Create Topic REST API
    @PostMapping
    public ResponseEntity<Topic> createTopic(@RequestBody Topic topic) {  // Replace Category with Topic
        Topic savedTopic = topicService.createTopic(topic);  // Replace CategoryService with TopicService
        return new ResponseEntity<>(savedTopic, HttpStatus.CREATED);
    }

    // Get Topic by id REST API
    // http://localhost:8080/api/topics/1  // Change the path
    @GetMapping("{id}")
    public ResponseEntity<Topic> getTopicById(@PathVariable("id") Long topicId) {  // Replace categoryId with topicId
        Topic topic = topicService.getTopicById(topicId);  // Replace getCategoryById with getTopicById
        if (topic != null) {
            return new ResponseEntity<>(topic, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get All Topics REST API
    // http://localhost:8080/api/topics  // Change the path
    @GetMapping
    public ResponseEntity<Page<Topic>> getAllTopics(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Topic> topics = topicService.getAllTopics(pageable);  // Replace Categories with topics
        return new ResponseEntity<>(topics, HttpStatus.OK);
    }

    // Update Topic REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/topics/1  // Change the path
    public ResponseEntity<Topic> updateTopic(@PathVariable("id") Long topicId,
            @RequestBody Topic topic) {  // Replace Category with Topic
        topic.setId(topicId);
        Topic updatedTopic = topicService.updateTopic(topic);  // Replace CategoryService with TopicService
        return new ResponseEntity<>(updatedTopic, HttpStatus.OK);
    }

    // Delete Topic REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTopic(@PathVariable("id") Long topicId) {  // Replace categoryId with topicId
        topicService.deleteTopic(topicId);  // Replace deleteCategory with deleteTopic
        return new ResponseEntity<>("Topic successfully deleted!", HttpStatus.OK);
    }
}
