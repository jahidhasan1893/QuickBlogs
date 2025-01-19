package com.QuickBlogs.backend.dto;

import java.util.UUID;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
public record UserDTO(
        String id,
        String name,
        String email,
        String password,
        String profileImage
) {
}
