package com.janadi.JDBCBlogExample.dto;

import com.janadi.JDBCBlogExample.model.Author;
import com.janadi.JDBCBlogExample.model.Post;

public record PostDetails(Post post, Author author) {
}
