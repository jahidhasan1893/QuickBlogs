package com.QuickBlogs.backend.controller;

import com.QuickBlogs.backend.dto.BlogDTO;
import com.QuickBlogs.backend.model.Blog;
import com.QuickBlogs.backend.repository.BlogRepository;
import com.QuickBlogs.backend.service.BlogService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */

@RestController
@RequestMapping("api/v1/blog")
@AllArgsConstructor
public class BlogController {

    BlogService blogService;
    BlogRepository blogRepository;

    @PostMapping("/")
    public String add(@RequestBody BlogDTO blogDTO){
        return blogService.add(blogDTO);
    }

//    @PostMapping("/add-multiple")
//    public String add(@RequestBody List<BlogDTO> blogDTO){
//        return blogService.addMultiple(blogDTO);
//    }

    @GetMapping("/")
    public List<Blog> getAll(){
        return blogService.getAll();
    }

    @GetMapping("/{id}")
    public Blog get(@PathVariable String id){
        return blogService.getById(id);
    }
}
