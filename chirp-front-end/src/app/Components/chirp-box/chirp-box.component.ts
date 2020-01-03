import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';

@Component({
  selector: 'app-chirp-box',
  templateUrl: './chirp-box.component.html',
  styleUrls: ['./chirp-box.component.css']
})
export class ChirpBoxComponent implements OnInit {
  chirpBox = new FormControl('',[Validators.required,Validators.maxLength(200)])
  constructor(private interactions:InteractionsService) { }

  ngOnInit() {
  }

  postChirp(){
    console.log(this.chirpBox.value);
    this.interactions.postChirp(this.chirpBox.value);
    this.chirpBox.reset('');
    
  }
  

}
