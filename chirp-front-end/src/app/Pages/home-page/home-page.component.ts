import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { Router } from '@angular/router';
import { AuthenticatedUserDetails } from 'src/app/Models/authenticated-user-details';
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import { Chirp } from 'src/app/Models/chirp';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private userData:AuthenticatedUserDetails;
  chirpFeed:Chirp[];
  constructor(private authService:AuthenticationService, private route:Router, private myHttp:MyhttpService,private interactions:InteractionsService) { }

  ngOnInit() {
    this.userData = this.authService.getUserData();
    this.myHttp.getChirpsForFeed(this.userData.userId).subscribe(data=>{
      this.interactions.setFeed(data);
    })
    this.interactions.getFeed().subscribe(feed=>this.chirpFeed=feed);
  }

  signOut(e){
    this.authService.logout();
    this.route.navigate(['']);
  }

  getUserId(){
    return this.userData.userId;
  }

}
