import { Component, OnInit, Input } from '@angular/core';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import {Chirp} from '../../Models/chirp'

@Component({
  selector: 'app-chirp-feed',
  templateUrl: './chirp-feed.component.html',
  styleUrls: ['./chirp-feed.component.css']
})
export class ChirpFeedComponent implements OnInit {
  @Input('chirps') chirpFeed:Chirp[]
  //@Input('userId') userId:string;
  constructor(private interactions:InteractionsService, private myHttp:MyhttpService) { 
    
  }

  ngOnInit() {
    /*this.myHttp.getChirpsForFeed(this.userId).subscribe((data:Chirp[])=>{
      this.interactions.setFeed(data);
    })
    this.interactions.getFeed().subscribe(data=>{this.chirpFeed = data})*/
  }

}
