package com.QuickBlogs.backend.dto;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
public record BlogDTO(
        String id,
        String title,
        String content,
        String category,
        String image
) {
}
