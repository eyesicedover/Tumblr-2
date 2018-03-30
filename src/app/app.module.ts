import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewPostComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
