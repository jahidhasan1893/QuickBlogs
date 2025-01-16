package com.QuickBlogs.backend.repository;

import com.QuickBlogs.backend.model.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {

}
