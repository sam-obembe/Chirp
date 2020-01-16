import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { Router } from '@angular/router';
import { AuthenticatedUserDetails } from 'src/app/Models/authenticated-user-details';
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';
import { Chirp } from 'src/app/Models/chirp';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private userData:AuthenticatedUserDetails;
  private userChirps:Chirp[]
  constructor(private authService:AuthenticationService, private route:Router,private myHttp:MyhttpService, private interactions:InteractionsService) { 
    this.userData = this.authService.getUserData();
  }

  ngOnInit() {
    this.myHttp.getChirpsByUser(this.userData.userId).subscribe(chirps=>{
      this.interactions.setFeed(chirps)
    })
    this.interactions.getFeed().subscribe(chirps=>this.setUserChirps(chirps));
  }

  signOut(e){
    this.authService.logout();
    this.route.navigate(['']);
  }

  getUserData(){
    return "hi"
  }

  getUserId(){
    return this.userData.userId;
  }

  setUserChirps(chirps:[]){
    this.userChirps=chirps
  }

}
