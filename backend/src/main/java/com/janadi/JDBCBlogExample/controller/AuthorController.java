package com.janadi.JDBCBlogExample.controller;

import com.janadi.JDBCBlogExample.model.Author;
import com.janadi.JDBCBlogExample.service.AuthorService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/authors")
public class AuthorController {
    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    // get all authors
    @GetMapping
    Iterable<Author> getAuthors(){
        return authorService.getAllAuthors();
    }

    // get Author by id
    @GetMapping("/{id}")
    Author getAuthorById(@PathVariable int id){
        return authorService.getAuthorById(id);
    }

    // get author by email
    @GetMapping("/email/{email}")
    Author getAuthorByEmail(@PathVariable String email){
        return authorService.getAuthorByEmail(email);
    }

    // create author
    @PostMapping
    Author createAuthor(@RequestBody Author author){
        return authorService.createAuthor(author);
    }

    // update author
    @PutMapping("/{id}")
    Author updateAuthor(@PathVariable Integer id, @RequestBody Author author){
        return authorService.updateAuthor(id, author);
    }

    // delete author
    @DeleteMapping("/{id}")
    void deleteAuthor(@PathVariable Integer id){
        authorService.deleteAuthor(id);
    }

}
