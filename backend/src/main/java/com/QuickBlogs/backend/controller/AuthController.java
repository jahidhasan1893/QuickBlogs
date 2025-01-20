package com.QuickBlogs.backend.controller;

import com.QuickBlogs.backend.dto.UserRegisterDTO;
import com.QuickBlogs.backend.dto.UserAuthDTO;
import com.QuickBlogs.backend.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* Author: Md Jahid Hasan
* Date: 1/16/25
*/
@RestController
@RequestMapping("api/v1/auth")
@AllArgsConstructor
public class AuthController {

    AuthService authService;

    @PostMapping("/sign-in")
    public String signIn(@RequestBody UserAuthDTO userAuthDTO){
        return authService.authenticate(userAuthDTO);
    }


    @PostMapping("/register")
    public String register(@RequestBody UserRegisterDTO userRegisterDTO){
        return authService.create(userRegisterDTO);
    }
}
