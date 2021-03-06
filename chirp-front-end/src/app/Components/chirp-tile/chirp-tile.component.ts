import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Chirp } from 'src/app/Models/chirp';

@Component({
  selector: 'app-chirp-tile',
  templateUrl: './chirp-tile.component.html',
  styleUrls: ['./chirp-tile.component.css']
})
export class ChirpTileComponent implements OnInit {
  @Input('chirpData') chirp:Chirp
  @Input('chirpPoster') poster;
  @Input('isChirpLiked') isChirpLiked:boolean;
  @Output() likeClicked = new EventEmitter()
  dummyPic = "https://robohash.org/chirp"
  constructor() { }

  ngOnInit() {
  }

  clickLike(){
    this.likeClicked.emit(this.chirp.chirpId)
    this.isChirpLiked = true;
  }

}
