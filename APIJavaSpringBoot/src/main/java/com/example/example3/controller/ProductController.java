package com.example.example3.controller;

import lombok.AllArgsConstructor;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.example.example3.entity.Product;
import com.example.example3.service.ProductService;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
public class ProductController {

    private ProductService productService;

    // Create Product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product Product) {

        Product savedProduct = productService.createProduct(Product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

  
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long ProductId) {
        Product Product = productService.getProductById(ProductId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> productPage = productService.getAllProducts(pageable);

        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }


    @PutMapping("{id}")

    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long ProductId,
            @RequestBody Product Product) {
        Product.setId(ProductId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId) {
        productService.deleteProduct(ProductId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }
}
