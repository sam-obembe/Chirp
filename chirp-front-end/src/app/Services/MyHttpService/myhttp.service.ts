import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chirp } from 'src/app/Models/chirp';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {
  private http;
  private domain = "http://localhost:8080";
  constructor(private httpClient:HttpClient) { 
    this.http=httpClient;
  }

  registerUserInDB(userId:string,userName:string){
    return this.http.post(`${this.domain}/auth/register`,{userId,userName});
  }

  loginUser(userId:string){
    return this.http.post(`${this.domain}/auth/login`,{userId:userId});
  }

  search(searchString:string){
    return this.http.get(`${this.domain}/search/${searchString}`);
  }

  postChirp(chirp:Chirp){
    return this.http.post(`${this.domain}/chirp`,chirp)
  }

  getChirpsForFeed(userId:string){
    return this.http.get(`${this.domain}/chirp/${userId}/chirps/following`)
  }

  getChirpsByUser(userId:string){
    return this.http.get(`${this.domain}/chirp/${userId}/chirps`)
  }

  getFollowers(userId:string){
    return this.http.get(`${this.domain}/users/${userId}/followers`)
  }
}
