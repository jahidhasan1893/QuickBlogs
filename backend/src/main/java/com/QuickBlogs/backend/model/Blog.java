package com.QuickBlogs.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


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
    private String author;
    private String content;
    private String category;
    private String image;

}
