package com.janadi.JDBCBlogExample.model;

import org.springframework.data.annotation.Id;

import javax.annotation.processing.Generated;

public record Author(
        @Id
        Integer id,
        String firstName,
        String lastName,
        String email,
        String username
) {
}
