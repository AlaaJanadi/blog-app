import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Author } from '../author';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css'],
})
export class AuthorAddComponent {
  @Output() authorCreated:EventEmitter<null> = new EventEmitter<null>();
  @Output() hideEditPanel:EventEmitter<null> = new EventEmitter<null>()

  @Input() author: Author = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  };
  @Input() isShown:boolean = false;
  @Input() state:string = 'Add'
  @Input() alertMessage: string = '';

  isError: boolean = false;
  isSuccess: boolean = false;
  isLoading: boolean = false;

  constructor(private api: ApiService) {}

  onSubmit() {
    this.isError = false;
    this.isSuccess = false;
    this.alertMessage = '';

    if (
      this.author.firstName === '' ||
      this.author.lastName === '' ||
      this.author.email === '' ||
      this.author.username === ''
    ) {
      this.isError = true;
      this.alertMessage = 'All fields is required';
    } else if (
      !this.author.email.includes('@') ||
      !this.author.email.includes('.')
    ) {
      this.isError = true;
      this.alertMessage = 'Email should be valid';
    } else {
      this.isError = false;
      this.alertMessage = '';
      this.isLoading = true;
      this.api.createAuthor(this.author).subscribe((author) => {
        this.author = author;
        this.isLoading = false;
        if (this.author.id) {
          this.isSuccess = true;
          this.alertMessage = `Author with id ${this.author.id} and name: ${this.author.firstName} ${this.author.lastName} was ${this.state === 'Add'? 'added':'edited'} successfully`;
          this.authorCreated.emit()
          this.state !== 'Add' ? this.hideAddAuthor() : () => {};
          this.clearAuthor()
        }
      });
    }
  }

  // set timer
  hideAlert() {
    this.isError = false;
    this.isSuccess = false;
    this.alertMessage = '';
  }

  ShowAddAuthor() {
    this.isShown = true
  }

  hideAddAuthor() {
    this.isShown = false
    this.clearAuthor()
    this.restState()
    this.hideAlert()
    this.hideEditPanel.emit()
  }

  clearAuthor():void{
    this.author = {
      firstName:'',
      lastName:'',
      email:'',
      username:'',
      id:undefined
    }
  }
  restState():void{
    this.state = 'Add';
  }
}
