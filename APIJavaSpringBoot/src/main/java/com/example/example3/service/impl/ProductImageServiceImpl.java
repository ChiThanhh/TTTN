package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.example3.entity.ProductImage;
import com.example.example3.service.ProductImageService;
import com.example.example3.repository.ProductImageRepository;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductImageServiceImpl implements ProductImageService {

    private ProductImageRepository productImageRepository;

    @Override
    public ProductImage createProductImage(ProductImage productImage) {
        return productImageRepository.save(productImage);
    }

    @Override
    public ProductImage getProductImageById(Long productImageId) {
        Optional<ProductImage> optionalProductImage = productImageRepository.findById(productImageId);
        return optionalProductImage.get();
    }

    @Override
    public Page<ProductImage> getAllProductImages(Pageable pageable) {
        return productImageRepository.findAll(pageable);
    }

    @Override
    public ProductImage updateProductImage(ProductImage productImage) {
        ProductImage existingProductImage = productImageRepository.findById(productImage.getId()).get();
        existingProductImage.setProductId(productImage.getProductId());
        existingProductImage.setImage(productImage.getImage());
        existingProductImage.setIsPrimary(productImage.getIsPrimary());
        existingProductImage.setCreatedAt(productImage.getCreatedAt());
        existingProductImage.setUpdatedAt(productImage.getUpdatedAt());
        ProductImage updatedProductImage = productImageRepository.save(existingProductImage);
        return updatedProductImage;
    }

    @Override
    public void deleteProductImage(Long productImageId) {
        productImageRepository.deleteById(productImageId);
    }
}
