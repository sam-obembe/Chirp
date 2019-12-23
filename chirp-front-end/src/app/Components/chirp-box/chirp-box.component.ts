import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-chirp-box',
  templateUrl: './chirp-box.component.html',
  styleUrls: ['./chirp-box.component.css']
})
export class ChirpBoxComponent implements OnInit {
  chirpBox = new FormControl('',[Validators.required,Validators.maxLength(200)])
  constructor() { }

  ngOnInit() {
  }

  postChirp(){
    console.log(this.chirpBox.value);
    console.log(this.chirpBox);
    this.chirpBox.reset('');
    
  }
  

}
