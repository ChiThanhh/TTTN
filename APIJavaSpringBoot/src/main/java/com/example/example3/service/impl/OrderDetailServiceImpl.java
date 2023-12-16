package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.example3.entity.OrderDetail;
import com.example.example3.service.OrderDetailService;
import com.example.example3.repository.OrderDetailRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService {

    private OrderDetailRepository orderDetailRepository;

    @Override
    public OrderDetail createOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderDetailId) {
        Optional<OrderDetail> optionalOrderDetail = orderDetailRepository.findById(orderDetailId);
        return optionalOrderDetail.orElse(null);
    }

    @Override
    public Page<OrderDetail> getAllOrderDetails(Pageable pageable) {
        return orderDetailRepository.findAll(pageable);
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderDetail) {
        OrderDetail existingOrderDetail = orderDetailRepository.findById(orderDetail.getId()).orElse(null);
        if (existingOrderDetail != null) {
            existingOrderDetail.setOrderId(orderDetail.getOrderId());
            existingOrderDetail.setProductId(orderDetail.getProductId());
            existingOrderDetail.setPrice(orderDetail.getPrice());
            existingOrderDetail.setQty(orderDetail.getQty());
            existingOrderDetail.setAmount(orderDetail.getAmount());
            OrderDetail updatedOrderDetail = orderDetailRepository.save(existingOrderDetail);
            return updatedOrderDetail;
        }
        return null;
    }

    @Override
    public void deleteOrderDetail(Long orderDetailId) {
        orderDetailRepository.deleteById(orderDetailId);
    }
}
