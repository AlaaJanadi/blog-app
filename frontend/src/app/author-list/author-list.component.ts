import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Author } from '../author';
import {AuthorAddComponent} from "../author-add/author-add.component";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors : Author[] = [];

  errorDialogShown = false;

  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.getAllAuthors();
  }

  onDoCheck():void{
    console.log("DoCheck")
  }

  getAllAuthors(){
    this.api.getAllAuthors().subscribe({
      next: (data: Author[]) => {
        this.authors = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onDelete(id?: number){
    if(id){
      this.api.deleteAuthor(id).subscribe({
      next: (data: any) => {
        this.authors = this.authors.filter(author => author.id !== id);
      },error: (error: any) => {
        this.errorDialogShown = true;
      }
    })
    }
  }

  hideErrorDialog(){
    this.errorDialogShown = false;
  }

  onEdit(AddEditComp: AuthorAddComponent, author: Author){
    AddEditComp.author = author;
    AddEditComp.state = 'Edit';
    AddEditComp.isShown = true;
  }

  onAuthorCreated() {
    this.getAllAuthors()
  }

  onClose() {
    this.getAllAuthors()
  }
}
