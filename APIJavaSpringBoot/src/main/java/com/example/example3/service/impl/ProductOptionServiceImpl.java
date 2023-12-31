package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.example3.entity.ProductOption;
import com.example.example3.service.ProductOptionService;
import com.example.example3.repository.ProductOptionRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductOptionServiceImpl implements ProductOptionService {

    private ProductOptionRepository productOptionRepository;

    @Override
    public ProductOption createProductOption(ProductOption productOption) {
        return productOptionRepository.save(productOption);
    }

    @Override
    public ProductOption getProductOptionById(Long productOptionId) {
        Optional<ProductOption> optionalProductOption = productOptionRepository.findById(productOptionId);
        return optionalProductOption.get();
    }
    @Override
    public Page<ProductOption> getAllProductOptions(Pageable pageable) {
        return productOptionRepository.findAll(pageable);
    }

    @Override
    public ProductOption updateProductOption(ProductOption productOption) {
        ProductOption existingProductOption = productOptionRepository.findById(productOption.getId()).get();
        existingProductOption.setProductId(productOption.getProductId());
        existingProductOption.setName(productOption.getName());
        existingProductOption.setCreatedAt(productOption.getCreatedAt());
        existingProductOption.setUpdatedAt(productOption.getUpdatedAt());
        ProductOption updatedProductOption = productOptionRepository.save(existingProductOption);
        return updatedProductOption;
    }

    @Override
    public void deleteProductOption(Long productOptionId) {
        productOptionRepository.deleteById(productOptionId);
    }
}
