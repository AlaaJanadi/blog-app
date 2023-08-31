import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[] = [];
  @Output() deletePost: EventEmitter<number> = new EventEmitter<number>()
  @Output() editedPost: EventEmitter<Post> = new EventEmitter<Post>()

  onDelete(id: number | undefined) {
    this.deletePost.emit(id)
  }

  onEdit(post: Post) {
    post.author_id = post.author_id.id
    this.editedPost.emit(post)
  }
}
