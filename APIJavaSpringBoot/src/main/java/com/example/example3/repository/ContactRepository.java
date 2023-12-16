package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.example3.entity.Contact;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    Page<Contact> findAll(Pageable pageable);
}