package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.ProductImage;

public interface ProductImageService {
    
    public ProductImage createProductImage(ProductImage productImage);
    public ProductImage getProductImageById(Long productImageId);
    public Page<ProductImage> getAllProductImages(Pageable pageable);
    public ProductImage updateProductImage(ProductImage productImage);
    public void deleteProductImage(Long productImageId);
}
