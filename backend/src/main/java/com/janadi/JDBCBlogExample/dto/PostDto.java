package com.janadi.JDBCBlogExample.dto;

import com.janadi.JDBCBlogExample.model.Post;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

public class PostDto {
    private String title;
    private String content;
    private int author_id;

    public PostDto(String title, String content, int author_id) {
        this.title = title;
        this.content = content;
        this.author_id = author_id;
    }

    public PostDto() {
    }

    public Post toPost(){
        return new Post(title,content, AggregateReference.to(author_id));
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(int author_id) {
        this.author_id = author_id;
    }
}
