import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthorListComponent} from "./author-list/author-list.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'authors', component: AuthorListComponent},
  {path: 'authors/:id', component: AuthorDetailsComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
