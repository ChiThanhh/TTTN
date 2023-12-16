package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.ProductSale;

public interface ProductSaleService {
    
    public ProductSale createProductSale(ProductSale productSale);
    public ProductSale getProductSaleById(Long productSaleId);
    public Page<ProductSale> getAllProductSales(Pageable pageable);
    public ProductSale updateProductSale(ProductSale productSale);
    public void deleteProductSale(Long productSaleId);
}
