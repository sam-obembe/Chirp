import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';

@Component({
  selector: 'app-followers-following-page',
  templateUrl: './followers-following-page.component.html',
  styleUrls: ['./followers-following-page.component.css']
})
export class FollowersFollowingPageComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  signOut(e){
    this.authService.logout();
  }

}
