import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
