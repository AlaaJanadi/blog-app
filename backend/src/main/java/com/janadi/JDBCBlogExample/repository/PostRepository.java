package com.janadi.JDBCBlogExample.repository;

import com.janadi.JDBCBlogExample.model.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post,Integer> {

}
