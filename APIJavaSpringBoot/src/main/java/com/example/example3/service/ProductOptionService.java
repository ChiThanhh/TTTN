package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.ProductOption;

public interface ProductOptionService {
    ProductOption createProductOption(ProductOption productoption);

    ProductOption getProductOptionById(Long productoptionId);

    Page<ProductOption> getAllProductOptions(Pageable pageable);

    ProductOption updateProductOption(ProductOption productoption);

    void deleteProductOption(Long productoptionId);
    
}
