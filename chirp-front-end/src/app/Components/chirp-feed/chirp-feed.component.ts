import { Component, OnInit } from '@angular/core';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';


@Component({
  selector: 'app-chirp-feed',
  templateUrl: './chirp-feed.component.html',
  styleUrls: ['./chirp-feed.component.css']
})
export class ChirpFeedComponent implements OnInit {
  chirpFeed:[]
  constructor(private interactions:InteractionsService) { }

  ngOnInit() {
  }

}
