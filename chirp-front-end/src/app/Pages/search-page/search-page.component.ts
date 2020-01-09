import { Component, OnInit } from '@angular/core';
import { InteractionsService } from 'src/app/Services/InteractionsService/interactions.service';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  private userResults:[] =[];
  private chirpResults:[]=[] ;

  constructor(
    private interactions:InteractionsService,private auth:AuthenticationService,private route:Router, private activated:ActivatedRoute, private myHttp:MyhttpService) {
    
      this.activated.paramMap.subscribe((params:ParamMap)=>{
      let searchString = params.get('searchString')
      this.myHttp.search(searchString).subscribe(data=>{
        this.interactions.setSearchResults(data);
      })
    })
    
    this.interactions.getSearchResults().subscribe(searchResults=>{
      let currentUser = this.auth.getUserData();
      this.userResults=searchResults.users.filter(user=>user.userId!==currentUser.userId)
      //this.userResults=searchResults.users;
      this.chirpResults = searchResults.chirps;
    })
   }

  ngOnInit() {
    
  }

  signOut(e){
    this.auth.logout();
    this.route.navigate([''])
  }

  getChirpResults(){
    return this.chirpResults
  }

}
