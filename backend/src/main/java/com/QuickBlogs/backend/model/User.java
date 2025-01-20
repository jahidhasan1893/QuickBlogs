package com.QuickBlogs.backend.model;

import com.QuickBlogs.backend.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails, Serializable {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String profileImage;
    private Role role;
    @DBRef
    List<Blog> blogs;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.getRole().toString()));
    }

    @Override
    public String getUsername() {
        return this.getEmail();
    }
}
