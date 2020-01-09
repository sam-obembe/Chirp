import { Component, OnInit, Input } from '@angular/core';
import { AuthenticatedUserDetails } from 'src/app/Models/authenticated-user-details';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  @Input('userDetails') userDetails:AuthenticatedUserDetails;
  dummyAvatar:string = "https://robohash.org/chirp";
  constructor() { }

  ngOnInit() {
  }

  getProfilePicture(){
    return this.userDetails.profilePicture.length>0? this.userDetails.profilePicture:this.dummyAvatar
  }

}
