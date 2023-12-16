package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.ProductOptionValue;

public interface ProductOptionValueService {
    
    public ProductOptionValue createProductOptionValue(ProductOptionValue productOptionValue);
    public ProductOptionValue getProductOptionValueById(Long poductOptionValueId);
    public Page<ProductOptionValue> getAllProductOptionValues(Pageable pageable);
    public ProductOptionValue updateProductOptionValue(ProductOptionValue productOptionValue);
    public void deleteProductOptionValue(Long productOptionValueId);
}
