package com.QuickBlogs.backend.util;

import org.springframework.stereotype.Service;

/**
 * Author: Md Jahid Hasan
 * Date: 1/16/25
 */
@Service
public class BlogUtil {

    public String generateSummary(String blogContent){
        int summaryLength = 300;
        if(blogContent.length()> summaryLength){
            return blogContent.substring(0, summaryLength)+"....";
        }
        return blogContent;
    }
}
