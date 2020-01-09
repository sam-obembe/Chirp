import { Component, OnInit, Input } from '@angular/core';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {
  @Input('userData') userData:{userId:string,userName:string,profilePicture:string};
  dummyAvatar:string = "https://robohash.org/chirp";
  buttonText;
  followsYou
  constructor(private interaction:InteractionsService) { 
    console.log(this.userData);
    
  }

  ngOnInit() {
    this.buttonText = this.checkIfFollowing()===true? "Unfollow":"Follow";
    this.followsYou = this.checkIfFollower();
  }

  getProfilePicture():string{
    return this.userData.profilePicture.length>0? this.userData.profilePicture:this.dummyAvatar;
  }

  checkIfFollowing():boolean{
    return this.interaction.checkIfFollowing(this.userData.userId);
  }

  checkIfFollower():boolean{
    return this.interaction.checkIfFollower(this.userData.userId)
  }



}
