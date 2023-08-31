package com.janadi.JDBCBlogExample.service;

import com.janadi.JDBCBlogExample.dto.PostDetails;
import com.janadi.JDBCBlogExample.dto.PostDto;
import com.janadi.JDBCBlogExample.model.Author;
import com.janadi.JDBCBlogExample.model.Comment;
import com.janadi.JDBCBlogExample.model.Post;
import com.janadi.JDBCBlogExample.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Objects;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final AuthorService authorService;

    public PostService(PostRepository postRepository, AuthorService authorService){
        this.postRepository = postRepository;
        this.authorService = authorService;
    }

    // get all posts
    public Iterable<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // get post by id
    public Post getPostById(Integer id) {
        return postRepository.findById(id).orElse(null);
    }

    // get post by id with details
    public PostDetails getPostByIdWithDetails(Integer id) {
        Post post = postRepository.findById(id).orElse(null);
        if (Objects.isNull(post)) return null;
        Author author = authorService.getAuthorById(post.getAuthor_id().getId());
        return new PostDetails(post, author);
    }

    // create post
    public Post create(PostDto postDto) {
        if (authorService.authorExists(postDto.getAuthor_id())){
            Post post = postDto.toPost();
            return postRepository.save(post);
        }
        throw new RuntimeException("Author not found");
    }

    // delete post
    public void deletePost(Integer id) {
        Post existingPost = postRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Post not found")
        );

        postRepository.delete(existingPost);
    }

    // update post
    public Post updatePost(Integer id, Post post) {
        Post existingPost = postRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Post not found")
        );
        existingPost.setTitle(post.getTitle());
        existingPost.setContent(post.getContent());
        existingPost.setUpdatedOn(LocalDateTime.now());

        return postRepository.save(existingPost);
    }
    // add comment
    public Post addComment(Integer id, Comment comment) {
        Post existingPost = postRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Post not found")
        );
        existingPost.addComment(comment);
        return postRepository.save(existingPost);
    }

    // delete comment
    public Post deleteComment(Integer id, Comment comment) {
        Post existingPost = postRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Post not found")
        );
        existingPost.removeComment(comment);
        return postRepository.save(existingPost);
    }

    // update comment
    public Post updateComment(Integer id, Comment comment) {
        Post existingPost = postRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Post not found")
        );
        existingPost.updateComment(comment);
        return postRepository.save(existingPost);
    }





}
