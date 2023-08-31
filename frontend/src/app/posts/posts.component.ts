import { Component } from '@angular/core';
import {Post} from "../post";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = [];
  currentPost : Post = {
    title:'',
    content:'',
    author_id:0
  }
  state: string = 'Add';
  isShown:boolean = false;

  constructor(private api:ApiService) {
  }

  ngOnInit(){
    this.getAllPosts()
  }

  getAllPosts(){
    this.api.getAllPosts().subscribe({
      next: (data)=> this.posts = data,
      error: (error) => console.log(error)
    })
  }

  onPostDeleted(id: number) {
    this.api.deletePostById(id).subscribe({
      next: (data)=> {
        this.posts = this.posts.filter(x => x.id !== id)
      },
      error: (error) => console.log(error)
    })
  }

    onPostAdded() {
      this.getAllPosts()
    }

  onEditedPost(post: Post) {
    this.currentPost = post
    this.isShown = true
    this.state = 'Edit'
  }

  onHideAddPostPanel() {
    this.isShown= false;
    this.state = 'Add';
    this.currentPost = {
      title:'',
      content:'',
      author_id:0
    }
  }
}
