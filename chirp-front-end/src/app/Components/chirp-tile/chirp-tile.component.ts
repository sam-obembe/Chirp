import { Component, OnInit, Input } from '@angular/core';
import { Chirp } from 'src/app/Models/chirp';

@Component({
  selector: 'app-chirp-tile',
  templateUrl: './chirp-tile.component.html',
  styleUrls: ['./chirp-tile.component.css']
})
export class ChirpTileComponent implements OnInit {
  @Input('chirpData') chirp:Chirp
  @Input('chirpPoster') poster;
  dummyPic = "https://robohash.org/chirp"
  constructor() { }

  ngOnInit() {
  }

}
