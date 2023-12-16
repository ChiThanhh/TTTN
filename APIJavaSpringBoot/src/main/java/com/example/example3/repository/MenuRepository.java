package com.example.example3.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.example3.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    Page<Menu> findAll(Pageable pageable);
}
