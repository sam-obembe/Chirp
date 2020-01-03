import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService:AuthenticationService, private route:Router) { }

  ngOnInit() {
    console.log(this.authService.getUserData());
  }

  signOut(e){
    this.authService.logout();
    this.route.navigate(['']);
  }

}
