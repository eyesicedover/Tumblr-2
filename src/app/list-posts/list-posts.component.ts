import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { Post } from '../models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent  {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() childPostList: Post[];

  cleanURL(unsafeURL) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeURL);
  }

  cleanChat(unsafeChat) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafeChat);
  }
}
