package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.example3.entity.Product;
import com.example.example3.service.ProductService;
import com.example.example3.repository.ProductRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setTitle(product.getTitle());
        existingProduct.setSlug(product.getSlug());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setQty(product.getQty());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setBrandId(product.getBrandId());
        existingProduct.setMetakey(product.getMetakey());
        existingProduct.setMetadesc(product.getMetadesc());
        existingProduct.setCreatedAt(product.getCreatedAt());
        existingProduct.setUpdatedAt(product.getUpdatedAt());
        existingProduct.setCreatedBy(product.getCreatedBy());
        existingProduct.setUpdatedBy(product.getUpdatedBy());
        existingProduct.setStatus(product.getStatus());

        Product updatedProduct = productRepository.save(existingProduct);
        return updatedProduct;
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
}
