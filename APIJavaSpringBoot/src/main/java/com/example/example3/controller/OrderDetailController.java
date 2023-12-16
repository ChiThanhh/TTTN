package com.example.example3.controller;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.example3.entity.OrderDetail;
import com.example.example3.service.OrderDetailService;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderdetails")  // Đặt đường dẫn mới thành "api/orderdetails"
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")

public class OrderDetailController {

    private OrderDetailService orderDetailService;

    // Create OrderDetail REST API
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail orderDetail) {
        OrderDetail savedOrderDetail = orderDetailService.createOrderDetail(orderDetail);
        return new ResponseEntity<>(savedOrderDetail, HttpStatus.CREATED);
    }

    // Get OrderDetail by id REST API
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id") Long orderDetailId) {
        OrderDetail orderDetail = orderDetailService.getOrderDetailById(orderDetailId);
        if (orderDetail != null) {
            return new ResponseEntity<>(orderDetail, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get All OrderDetails REST API
    @GetMapping
    public ResponseEntity<Page<OrderDetail>> getAllOrderDetails(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<OrderDetail> orderDetails = orderDetailService.getAllOrderDetails(pageable);
        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }

    // Update OrderDetail REST API
    @PutMapping("{id}")
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable("id") Long orderDetailId,
            @RequestBody OrderDetail orderDetail) {
        orderDetail.setId(orderDetailId);
        OrderDetail updatedOrderDetail = orderDetailService.updateOrderDetail(orderDetail);
        return new ResponseEntity<>(updatedOrderDetail, HttpStatus.OK);
    }

    // Delete OrderDetail REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrderDetail(@PathVariable("id") Long orderDetailId) {
        orderDetailService.deleteOrderDetail(orderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted!", HttpStatus.OK);
    }
}
