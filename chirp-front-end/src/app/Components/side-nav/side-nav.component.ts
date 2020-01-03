import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() signout = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  logOut(){
    this.signout.emit("signout");
  }

}
