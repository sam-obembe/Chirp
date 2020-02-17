import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {AuthenticationService} from '../AuthService/authentication.service';
import { Chirp } from 'src/app/Models/chirp';
import { MyhttpService } from '../MyHttpService/myhttp.service';


@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  private searchResults = new Subject<{users,chirps}>();
  private chirpFeed = new Subject<Chirp[]>();
  private searchResultsObservable = this.searchResults.asObservable() ;
  private chirpFeedObservable = this.chirpFeed.asObservable();
  private followers =new Subject<[]>();
  private followersObservable = this.followers.asObservable();

  constructor(private authService:AuthenticationService,private myHttp:MyhttpService) { }

  getSearchResults():Observable<{users,chirps}> {
    return this.searchResultsObservable;
  }

  setSearchResults(results:{users,chirps}):void{
   this.searchResults.next(results);
  }

  postChirp(chirp:string):void{
    let uid = this.authService.getUserData().userId;
    let post:Chirp = {userId:uid,chirp, replying:"",imgUrls:[""]}
    console.log(post);
    this.myHttp.postChirp(post).subscribe(data=>console.log(data))
  }

  getFeed():Observable<any>{
    return this.chirpFeedObservable
  }

  setFeed(chirps: Chirp[]){
    this.chirpFeed.next(chirps);
  }

  checkIfFollowing(userId:string):boolean{
    let currentLoggedInUser = this.authService.getUserData()
    let exists = currentLoggedInUser.following.includes(userId);
    return exists;
  }

  checkIfFollower(userId:string):boolean{
    let currentLoggedInUser = this.authService.getUserData()
    let exists = currentLoggedInUser.followers.includes(userId);
    return exists;
  }

  setFollowers(followers:[]){
    this.followers.next(followers)
  }

  getFollowers(){
    return this.followersObservable;
  }

}
