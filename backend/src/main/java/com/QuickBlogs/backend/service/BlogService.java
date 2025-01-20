package com.QuickBlogs.backend.service;

import com.QuickBlogs.backend.dto.BlogDTO;
import com.QuickBlogs.backend.model.Blog;
import com.QuickBlogs.backend.model.User;
import com.QuickBlogs.backend.repository.BlogRepository;
import com.QuickBlogs.backend.util.BlogUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
@Service
@AllArgsConstructor
public class BlogService {
    BlogRepository blogRepository;
    UserService userService;
    BlogUtil blogUtil;

    @Transactional
    public String add(BlogDTO blogDTO) {
        Blog blog = new Blog(
                UUID.randomUUID().toString(),
                blogDTO.title(),
                null,
                blogDTO.content(),
                blogDTO.image(),
                new ArrayList<>()
        );
        blogRepository.save(blog);
        return "Blog published";
    }

    public List<Blog> getAll() {
        return blogRepository.findAll().stream()
                .peek(blog -> blog.setContent(blogUtil.generateSummary(blog.getContent())))
                .collect(Collectors.toList());
    }

//    @Transactional
//    public String addMultiple(List<BlogDTO> blogDTOS) {
//        for(BlogDTO blogDTO: blogDTOS){
//            Blog blog = new Blog(
//                    blogDTO.id(),
//                    blogDTO.title(),
//                    null,
//                    blogDTO.content(),
//                    blogDTO.category(),
//                    blogDTO.image()
//            );
//            blogRepository.save(blog);
//        }
//
//        return "published all blogs";
//    }

    public Blog getById(String id) {
        return blogRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}
