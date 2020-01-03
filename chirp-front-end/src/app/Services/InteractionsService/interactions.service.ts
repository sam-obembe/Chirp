import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {AuthenticationService} from '../AuthService/authentication.service';
import { Chirp } from 'src/app/Models/chirp';
import { MyhttpService } from '../MyHttpService/myhttp.service';


@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  private searchResults = new Subject<[]>();
  private searchResultsObservable = this.searchResults.asObservable() ;
  constructor(private authService:AuthenticationService,private myHttp:MyhttpService) { }

  getSearchResults():Observable<[]> {
    return this.searchResultsObservable;
  }

  setSearchResults(results:[]):void{
   this.searchResults.next(results);
  }

  postChirp(chirp:string):void{
    let uid = this.authService.getUserData().userId;
    let post:Chirp = {userId:uid,chirp, replying:"",imgUrls:[""]}
    console.log(post);
    this.myHttp.postChirp(post).subscribe(data=>console.log(data))
  }
}
