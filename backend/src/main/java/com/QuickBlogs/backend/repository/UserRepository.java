package com.QuickBlogs.backend.repository;

import com.QuickBlogs.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    UserDetails findByEmail(String email);
}
