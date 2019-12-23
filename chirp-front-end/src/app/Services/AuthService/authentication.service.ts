import { Injectable } from '@angular/core';
import { FirebaseConfigService } from '../firebase/firebase-config.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private firebase;
  private domain = "http://localhost:8080";
  private userData;
  constructor(private firebaseConfig:FirebaseConfigService,private http:HttpClient) { 
    this.firebase = firebaseConfig.getFirebase();
  }

  signUp(email:string,password:string,userName:string){
    this.firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(credential=>{
      let uid = credential.user.uid;
      this.http.post(`${this.domain}/auth/register`,{userId:uid,userName}).subscribe(res=>{
        console.log(res)
        this.userData=res;
      })
    })
    .catch(err=>console.log(err))
  }

  login(email:string,password:string){
    let uid:string;
    this.firebase.auth().signInWithEmailAndPassword(email,password)
    .then(credential=>{
      uid= credential.user.uid;
      return this.http.post(`${this.domain}/auth/login`,{userId:uid}).subscribe(data=>{
        this.userData = data;
        console.log(this.userData);
        console.log(this.firebase.auth().currentUser);
      })
    })
    .catch(err=>console.log(err))
  }

  getUserData(){
    return this.userData;
  }

  checkLoggedIn():boolean{
    return this.firebase.auth().onAuthStateChanged(user=>{
      if(user){
        return true
      }
      else{
        return false
      }
    })
  }
}
