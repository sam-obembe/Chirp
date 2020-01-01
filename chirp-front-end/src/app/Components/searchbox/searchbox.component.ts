import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  searchInput = new FormControl('');
  constructor() { }

  ngOnInit() {
  }


  onEnter(event){
    if(event.keyCode===13){
      console.log(this.searchInput.value)
    }
    
  }
}
