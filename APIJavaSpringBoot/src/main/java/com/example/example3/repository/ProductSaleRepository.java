package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.example3.entity.ProductSale;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductSaleRepository extends JpaRepository<ProductSale, Long> {
    Page<ProductSale> findAll(Pageable pageable);
}
