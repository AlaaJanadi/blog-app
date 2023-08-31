package com.janadi.JDBCBlogExample.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

public class Post {
    @Id private Integer id;
    private String title;
    private String content;
    private LocalDateTime publishedOn;
    private LocalDateTime updatedOn;
    private AggregateReference<Author,Integer> author_id;
    private Set<Comment> comments = new HashSet<>();


    public Post(String title, String content, AggregateReference<Author, Integer> author_id) {
        this.title = title;
        this.content = content;
        this.publishedOn = LocalDateTime.now();
        this.author_id = author_id;
    }

    public void addComment(Comment comment){
        comments.add(comment);
        comment.post = this;

    }

    public void removeComment(Comment comment){
        var theComment = comments.stream()
                .filter(c -> c.getName().equals(comment.getName()))
                .findFirst()
                .orElseThrow(
                        () -> new RuntimeException("Comment not found")
                );
        comments.remove(theComment);
        theComment.post = null;
    }

    public void updateComment(Comment comment){
        var theComment = comments.stream()
                .filter(c -> c.getName().equals(comment.getName()))
                .findFirst()
                .orElseThrow(
                        () -> new RuntimeException("Comment not found")
                );
        comments.remove(theComment);
        theComment.post = null;
        comment.setUpdatedOn(LocalDateTime.now());
        comments.add(comment);
        comment.post = this;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public AggregateReference<Author, Integer> getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(AggregateReference<Author, Integer> author_id) {
        this.author_id = author_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public LocalDateTime getPublishedOn() {
        return publishedOn;
    }

    public void setPublishedOn(LocalDateTime publishedOn) {
        this.publishedOn = publishedOn;
    }

    public LocalDateTime getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(LocalDateTime updatedOn) {
        this.updatedOn = updatedOn;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", publishedOn=" + publishedOn +
                ", updatedOn=" + updatedOn +
                ", author_id=" + author_id +
                '}';
    }
}
