package com.QuickBlogs.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document("Blog")
public class Blog {
    @Id
    private String id;
    private String title;
    private User author;
    private String content;
    private String image;
    @DBRef
    List<Comment> comments;
}
