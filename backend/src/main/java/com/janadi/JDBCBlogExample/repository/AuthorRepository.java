package com.janadi.JDBCBlogExample.repository;

import com.janadi.JDBCBlogExample.model.Author;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Author,Integer> {
    Author findByEmail(String email);
}
