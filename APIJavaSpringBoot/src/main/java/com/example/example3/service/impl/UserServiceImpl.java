package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.example3.entity.User; // Import the User entity
import com.example.example3.service.UserService; // Import the UserService
import com.example.example3.repository.UserRepository; // Import the UserRepository
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService { // Rename the class

    private UserRepository userRepository; // Rename the repository

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setAddress(user.getAddress());
        existingUser.setImage(user.getImage());
        existingUser.setCreatedAt(user.getCreatedAt());
        existingUser.setUpdatedAt(user.getUpdatedAt());
        existingUser.setCreatedBy(user.getCreatedBy());
        existingUser.setUpdatedBy(user.getUpdatedBy());
        existingUser.setRoles(user.getRoles());
        existingUser.setStatus(user.getStatus());
        User updatedUser = userRepository.save(existingUser);
        return updatedUser;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
