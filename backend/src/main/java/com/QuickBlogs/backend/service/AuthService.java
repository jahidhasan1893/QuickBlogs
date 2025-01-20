package com.QuickBlogs.backend.service;

import com.QuickBlogs.backend.dto.UserRegisterDTO;
import com.QuickBlogs.backend.dto.UserAuthDTO;
import com.QuickBlogs.backend.enums.Role;
import com.QuickBlogs.backend.model.User;
import com.QuickBlogs.backend.repository.UserRepository;
import com.QuickBlogs.backend.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;

/**
* Author: Md Jahid Hasan
* Date: 1/16/25
*/
@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    public String authenticate(UserAuthDTO userAuthDTO) {
        String email = userAuthDTO.email();
        String password = userAuthDTO.password();

        if (userRepository.findByEmail(email) == null) throw new BadCredentialsException("Bad credentials");

        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);

        Authentication authenticatedUser = authenticationManager.authenticate(authentication);


        return jwtUtil.generateToken(authenticatedUser);
    }

    public String create(UserRegisterDTO userRegisterDTO) {
        if (userRepository.findByEmail(userRegisterDTO.email()) != null) throw new RuntimeException();

        User user = new User(
                UUID.randomUUID().toString(),
                userRegisterDTO.name(),
                userRegisterDTO.email(),
                passwordEncoder.encode(userRegisterDTO.password()),
                null,
                Role.USER,
                new ArrayList<>()
        );

        userRepository.save(user);

        return "User Created Successfully";
    }
}
