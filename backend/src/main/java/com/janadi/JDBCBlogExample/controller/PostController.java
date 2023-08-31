package com.janadi.JDBCBlogExample.controller;

import com.janadi.JDBCBlogExample.dto.PostDetails;
import com.janadi.JDBCBlogExample.dto.PostDto;
import com.janadi.JDBCBlogExample.model.Comment;
import com.janadi.JDBCBlogExample.model.Post;
import com.janadi.JDBCBlogExample.service.PostService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    Iterable<Post> getPosts(){
        return postService.getAllPosts();
    }

    @PostMapping
    Post createPost(@RequestBody PostDto postDto){
        return postService.create(postDto);
    }

    @GetMapping("/{id}")
    Post getPostById(@PathVariable Integer id){
        return postService.getPostById(id);
    }
    @GetMapping("/{id}/detail")
    PostDetails getPostByIdWithDetails(@PathVariable Integer id){
        return postService.getPostByIdWithDetails(id);
    }

    @DeleteMapping("/{id}")
    void deletePost(@PathVariable Integer id){
        postService.deletePost(id);
    }

    @PutMapping("/{id}")
    Post updatePost(@PathVariable Integer id, @RequestBody Post post){
        return postService.updatePost(id, post);
    }

    @PostMapping("/{id}/comments")
    Post addComment(@PathVariable Integer id, @RequestBody Comment comment){
        return postService.addComment(id, comment);
    }

    @DeleteMapping("/{id}/comments")
    Post deleteComment(@PathVariable Integer id, @RequestBody Comment comment){
        return postService.deleteComment(id, comment);
    }

    @PutMapping("/{id}/comments")
    Post updateComment(@PathVariable Integer id,@RequestBody Comment comment){
        return postService.updateComment(id,comment);
    }

}
