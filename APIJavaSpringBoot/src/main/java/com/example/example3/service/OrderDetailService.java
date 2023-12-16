package com.example.example3.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.example3.entity.OrderDetail; 

public interface OrderDetailService {  
    
    public OrderDetail createOrderDetail(OrderDetail orderDetail); 
    public OrderDetail getOrderDetailById(Long orderDetailId);  
    public Page<OrderDetail> getAllOrderDetails(Pageable pageable);
    public OrderDetail updateOrderDetail(OrderDetail ordeDetailr); 
    public void deleteOrderDetail(Long orderDetailId); 
}
