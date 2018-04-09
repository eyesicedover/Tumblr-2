import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  masterPostList: Post[] = [
    new Post("quote", "star-wars-fan-69", "whovianDude", "Oh my gosh, I can't wait for the last Star Wars movie!", "Your Mom"),
    new Post("video", "gay-barbie", "bigbadberry", "https://www.youtube.com/embed/FPoKiGQzbSQ?rel=0", "none"),
    new Post("text", "crispsss", "godMOD", "I’m seeing a lot of posts cross my dash recommending that people replace Microsoft Office with OpenOffice in light of Microsoft’s new terms of service. OpenOffice is abandonware that hasn’t seen an update in seven years! Please do not install it. Instead install LibreOffice which is the exact same software plus seven years of updates. What happened was Oracle acquired OpenOffice when they bought Sun Microsystems but didn’t really have any interest in maintaining it so they abandoned it. Because OpenOffice was an open source project the community was able to just pick it up and continue development. However, because Oracle never gave up the ‘OpenOffice’ trademark the community project could not use the name OpenOffice. You can still download OpenOffice but it is no longer being maintained. If you want the up-to-date branch you should be installing LibreOffice. It is the same software.", "Thanks for the info!"),
    new Post("chat", "danger-mouse", "gay-barbie", "<p><b>Gary:</b> Are we in some sort of chat post right now? <br><b>Clara:</b> Don't be silly Gary, you always think you're a program in a computer. <br><b>Gary:</b> Yeah, but THIS TIME I think I'm right.<br><b>Clara:</b> Oh yeah, suuuuure.<br><b>Gary: </b>Why don't you ever believe me!</p>", "none"),
    new Post("audio", "Greedo", "plumblebee", "https://open.spotify.com/embed/track/5hRm3jPT463zpu94TMgCpO", "none"),
    new Post("link", "bitcoiner", "BTCforLyfe", "https://coinmarketcap.com/currencies/bitcoin/", "Checkout Coin Market Cap")
  ];
}
