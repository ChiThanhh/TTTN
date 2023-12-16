package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.example3.entity.ProductStore;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductStoreRepository extends JpaRepository<ProductStore, Long> {
    Page<ProductStore> findAll(Pageable pageable);
}
