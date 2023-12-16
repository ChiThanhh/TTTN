package com.example.example3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.example3.entity.ProductOption;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductOptionRepository extends JpaRepository<ProductOption, Long> {
    Page<ProductOption> findAll(Pageable pageable);
}
