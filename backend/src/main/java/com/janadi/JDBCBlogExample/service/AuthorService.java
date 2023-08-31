package com.janadi.JDBCBlogExample.service;

import com.janadi.JDBCBlogExample.model.Author;
import com.janadi.JDBCBlogExample.repository.AuthorRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    // get all authors
    public Iterable<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    // check if author exists by id
    public boolean authorExists(Integer id) {
        return authorRepository.existsById(id);
    }


    // get author by id
    public Author getAuthorById(Integer id) {
        return authorRepository.findById(id).orElse(null);
    }

    // get author by email
    public Author getAuthorByEmail(String email) {
        return authorRepository.findByEmail(email);
    }

    // create author
    public Author createAuthor(Author author) {
        return authorRepository.save(author);
    }

    // update author
    public Author updateAuthor(int id,Author author) {
        Author existingAuthor = authorRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Author not found")
        );
        Author updatedAuthor = new Author(
                existingAuthor.id(),
                author.firstName(),
                author.lastName(),
                author.email(),
                author.username()
        );

        return authorRepository.save(updatedAuthor);
    }

    // delete author
    public void deleteAuthor(Integer id) {
        Author existingAuthor = authorRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Author not found")
        );

        authorRepository.delete(existingAuthor);
    }
}
