import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  @Input() childPostList: Post[];

}
