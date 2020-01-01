import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    console.log(this.authService.getUserData());
  }

}
