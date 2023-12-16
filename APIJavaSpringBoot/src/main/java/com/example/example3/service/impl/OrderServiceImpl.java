package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.example3.entity.Order;
import com.example.example3.service.OrderService;
import com.example.example3.repository.OrderRepository;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Long orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        return optionalOrder.orElse(null);
    }

    @Override
    public Page<Order> getAllOrders(Pageable pageable) {
        return orderRepository.findAll(pageable);
    }

    @Override
    public Order updateOrder(Order order) {
        Order existingOrder = orderRepository.findById(order.getId()).orElse(null);
        if (existingOrder != null) {
            existingOrder.setUserId(order.getUserId());
            existingOrder.setName(order.getName());
            existingOrder.setEmail(order.getEmail());
            existingOrder.setPhone(order.getPhone());
            existingOrder.setAddress(order.getAddress());
            existingOrder.setNote(order.getNote());
            existingOrder.setCreatedAt(order.getCreatedAt());
            existingOrder.setUpdatedAt(order.getUpdatedAt());
            existingOrder.setCreatedBy(order.getCreatedBy());
            existingOrder.setUpdatedBy(order.getUpdatedBy());
            existingOrder.setStatus(order.getStatus());
            Order updatedOrder = orderRepository.save(existingOrder);
            return updatedOrder;
        }
        return null;
    }

    @Override
    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}
