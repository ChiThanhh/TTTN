package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.example3.entity.ProductOptionValue;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductOptionValueRepository extends JpaRepository<ProductOptionValue, Long> {
    Page<ProductOptionValue> findAll(Pageable pageable);
}
