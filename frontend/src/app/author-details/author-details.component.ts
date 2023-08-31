import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Author } from '../author';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  @Input() id!: number

  author: Author = {
    firstName: '',
    lastName: '',
    email: '',
    username:''
  }
  isError: boolean = false;
  isSuccess: boolean = false;
  alertMessage: string = '';

  inEdit: boolean = false;

  constructor(private route: ActivatedRoute, private api: ApiService,private location: Location) {

  }

  ngOnInit(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.getAuthorById()
  }

  getAuthorById(){
    this.api.getAuthorById(this.id).subscribe(author => this.author = author)
  }

  goBack(){
    this.location.back()
  }

  onDelete(){
    this.api.deleteAuthor(this.id).subscribe({
      next: ()=> {this.goBack()},
      error: (error:any)=> {
        this.isError = true;
        this.alertMessage = `Author deletion failed because the author has posts. Please delete the posts first`
      }
    })
  }

  onEdit(){
    this.inEdit = true
  }

  hideAlert() {
    this.isSuccess = false
    this.isError = false;
    this.alertMessage = ''
  }

  onClose() {
    this.inEdit = false;
    this.getAuthorById()
  }
}
