package com.janadi.JDBCBlogExample;

import com.janadi.JDBCBlogExample.model.Author;
import com.janadi.JDBCBlogExample.model.Comment;
import com.janadi.JDBCBlogExample.model.Post;
import com.janadi.JDBCBlogExample.repository.AuthorRepository;
import com.janadi.JDBCBlogExample.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import java.util.Optional;

@SpringBootApplication
public class JdbcBlogExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(JdbcBlogExampleApplication.class, args);
	}

//	@Bean
//	CommandLineRunner commandLineRunner(PostRepository postRepository, AuthorRepository authorRepository){
//		return args -> {
//
//			AggregateReference<Author, Integer> AlaaId = AggregateReference.to(authorRepository.save(
//					new Author(null,"Alaa","Al Janad","alaa@gamil.com","alaaJandai")
//			).id());
//
//			AggregateReference<Author,Integer> AsemId = AggregateReference.to(authorRepository.save(
//					new Author(null,"Asem","Al Janad","asem@gmail.com","asemJandai")
//			).id());
//
//			postRepository.save(new Post("First Post", "This is my first post",AlaaId));
//			postRepository.save(new Post("Second Post", "This is my second post",AlaaId));
//			postRepository.save(new Post("Third Post", "This is my third post",AsemId));
//
//			Optional<Post> post1 = postRepository.findById(1);
//			if (post1.isPresent()){
//				post1.get().addComment(
//						new Comment("alaa","this is my first comment")
//				);
//				post1.get().addComment(
//						new Comment("asem","this is asem comment")
//				);
//
//				postRepository.save(post1.get());
//			}
//
//			Post newPost = new Post("New Post","This is the New Post",AsemId);
//			newPost.addComment(
//					new Comment("alaa","Super new post asem thanks")
//			);
//
//			postRepository.save(newPost);
//
//		};
//	}

}
