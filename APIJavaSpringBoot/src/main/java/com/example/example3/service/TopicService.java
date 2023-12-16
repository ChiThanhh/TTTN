package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.Topic;

public interface TopicService {
    Topic createTopic(Topic topic);

    Topic getTopicById(Long topicId);

    Page<Topic> getAllTopics(Pageable pageable);

    Topic updateTopic(Topic topic);

    void deleteTopic(Long topicId);
    
}
