import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; // <-- Import HttpClientModule
import {FormsModule} from '@angular/forms'; // <-- Import FormsModule
import {AngularEditorModule} from "@kolkov/angular-editor";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthorDetailsComponent} from './author-details/author-details.component';
import {AuthorAddComponent} from './author-add/author-add.component';
import {PostsComponent} from './posts/posts.component';
import {PostListComponent} from './post-list/post-list.component';
import {AddPostComponent} from './add-post/add-post.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthorListComponent,
        HomeComponent,
        AuthorDetailsComponent,
        AuthorAddComponent,
        PostsComponent,
        PostListComponent,
        AddPostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AngularEditorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
