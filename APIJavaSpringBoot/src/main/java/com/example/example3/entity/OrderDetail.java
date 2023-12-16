package com.example.example3.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "db_orderdetail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order orderId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product productId;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private int qty;

    @Column(nullable = false)
    private BigDecimal amount;
}
