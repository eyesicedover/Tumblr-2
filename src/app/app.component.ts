import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  masterPostList: Post[] = [
    new Post("text", "star-wars-fan-69", "whovianDude", "Oh my gosh, I can't wait for the last Star Wars movie!"),
    new Post("video", "gay-barbie", "bigbadberry", "https://www.youtube.com/embed/FPoKiGQzbSQ?rel=0"),
    new Post("text", "crispsss", "godMOD", "I’m seeing a lot of posts cross my dash recommending that people replace Microsoft Office with OpenOffice in light of Microsoft’s new terms of service. OpenOffice is abandonware that hasn’t seen an update in seven years! Please do not install it. Instead install LibreOffice which is the exact same software plus seven years of updates. What happened was Oracle acquired OpenOffice when they bought Sun Microsystems but didn’t really have any interest in maintaining it so they abandoned it. Because OpenOffice was an open source project the community was able to just pick it up and continue development. However, because Oracle never gave up the ‘OpenOffice’ trademark the community project could not use the name OpenOffice. You can still download OpenOffice but it is no longer being maintained. If you want the up-to-date branch you should be installing LibreOffice. It is the same software.")
  ];
}
