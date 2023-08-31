import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';
import {Post} from "./post";
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private SERVER_URL = 'http://localhost:8080/api/v1';

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.SERVER_URL + '/authors');
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.SERVER_URL}/authors/${id}`);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.SERVER_URL}/authors`, author);
  }

  deleteAuthor(id: number) {
    return this.http.delete(`${this.SERVER_URL}/authors/${id}`);
  }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.SERVER_URL}/posts`)
  }

  deletePostById(id:number){
    return this.http.delete(`${this.SERVER_URL}/posts/${id}`)
  }

  createPost(post:Post):Observable<Post>{
    return this.http.post<Post>(`${this.SERVER_URL}/posts`,post);
  }
}
