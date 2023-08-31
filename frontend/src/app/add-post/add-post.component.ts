import {Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {Author} from "../author";
import {Post} from "../post";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnChanges{
    editorConfig: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '300px  ',
        minHeight: '0',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: '',
        defaultFontSize: '',
        fonts: [
            {class: 'arial', name: 'Arial'},
            {class: 'times-new-roman', name: 'Times New Roman'},
            {class: 'calibri', name: 'Calibri'},
            {class: 'comic-sans-ms', name: 'Comic Sans MS'}
        ],
        customClasses: [
            {
                name: 'quote',
                class: 'quote',
            },
            {
                name: 'redText',
                class: 'redText'
            },
            {
                name: 'titleText',
                class: 'titleText',
                tag: 'h1',
            },
        ],
        uploadUrl: 'v1/image',
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        toolbarHiddenButtons: [
           ['insertImage','insertVideo']
        ]
    };

    @Input() authors:Author[] = []
    @Input() post:Post  = {
        title:'',
        content:'',
        author_id:0
    }

    @Input() isShown : boolean = false;
    @Input() state : string = 'Add'
    isError: boolean = false;
    isSuccess: boolean = false;
    alertMessage: string = '';

    @Output() postAdded: EventEmitter<null> = new EventEmitter<null>()
    @Output() hideAddPostPanel: EventEmitter<null> = new EventEmitter<null>()

    constructor(private api:ApiService) {
    }

    ngOnInit(){
        this.getAllAuthors()
    }


    getAllAuthors(){
        this.api.getAllAuthors().subscribe({
            next:(data)=> {
                this.authors = data
            },
            error:(error)=>{
                console.error(error)
            }
        })
    }

    onSelectChange(selectElement: HTMLSelectElement) {
        this.post.author_id = Number(selectElement.value)
    }
    onSubmit() {
        if (this.post.title !== '' || this.post.content !== '' || this.post.author_id !== 0){
            console.log(this.post)
            this.api.createPost(this.post).subscribe({
                next:(data)=> {
                    this.clearPost()
                    this.onPostAdded()
                    this.isSuccess = true
                    this.alertMessage = `Post with id: ${data.id} was ${this.state === 'Add' ? 'Added':'Edited'} successfully`
                },
                error: (error) => {
                    console.error(error)
                }
            })
        }else{
            this.isError = true;
            this.alertMessage = 'All fields are required.'
        }
    }

    clearPost(){
        this.post ={
            title:'',
            content:'',
            author_id:0
        }
    }

    onPostAdded(){
        this.postAdded.emit()
    }

    hideAlert() {
        this.isError = false;
        this.isSuccess = false;
        this.alertMessage = ''
    }

    showAddPost() {
        this.isShown = true
    }

    hideAddPost() {
        this.isShown = false
        this.state = 'Add'
        this.clearPost()
        this.hideAlert()
        this.hideAddPostPanel.emit()
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

}
