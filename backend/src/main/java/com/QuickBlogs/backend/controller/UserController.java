package com.QuickBlogs.backend.controller;

import com.QuickBlogs.backend.dto.UserDTO;
import com.QuickBlogs.backend.service.UserService;
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
@RequestMapping("api/v2/user")
@AllArgsConstructor
public class UserController {
    UserService userService;

    @PostMapping("/")
    public String add(@RequestBody UserDTO userDTO){
        return userService.add(userDTO);
    }
}
