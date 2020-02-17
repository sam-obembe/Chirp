import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';
import { Router } from '@angular/router';
import { AuthenticatedUserDetails } from 'src/app/Models/authenticated-user-details';

@Component({
  selector: 'app-followers-following-page',
  templateUrl: './followers-following-page.component.html',
  styleUrls: ['./followers-following-page.component.css']
})
export class FollowersFollowingPageComponent implements OnInit {

  constructor(private authService:AuthenticationService,private myHttp:MyhttpService, private interactions:InteractionsService, private route:Router) { }

  ngOnInit() {
    let userDetails:AuthenticatedUserDetails= this.authService.getUserData();
    console.log(userDetails);
    this.myHttp.getFollowers(userDetails.userId).subscribe((followers:[])=>{
      this.interactions.setFollowers(followers)
    })
    this.interactions.getFollowers().subscribe(followers=>{
      console.log(followers)
    })
  }

  signOut(e){
    this.authService.logout();
    this.route.navigate([''])
  }

}
