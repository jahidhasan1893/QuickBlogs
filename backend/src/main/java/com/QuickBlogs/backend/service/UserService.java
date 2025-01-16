package com.QuickBlogs.backend.service;

import com.QuickBlogs.backend.dto.UserDTO;
import com.QuickBlogs.backend.model.User;
import com.QuickBlogs.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
@Service
@AllArgsConstructor
public class UserService {
    UserRepository userRepository;

    @Transactional
    public String add(UserDTO userDTO) {
        User user = new User(
                userDTO.id(),
                userDTO.name(),
                userDTO.email(),
                userDTO.password(),
                userDTO.profileImage()
        );
        userRepository.save(user);

        return "user saved successfully";
    }
}
