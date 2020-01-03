import { Injectable } from '@angular/core';
import { FirebaseConfigService } from '../firebase/firebase-config.service';
import {HttpClient} from '@angular/common/http';
import { AuthenticatedUserDetails } from 'src/app/Models/authenticated-user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private firebase;
  private userData:AuthenticatedUserDetails;
  private isAuthenticated:boolean;

  constructor(private http:HttpClient, private firebaseConfig:FirebaseConfigService) { 
    this.firebase = firebaseConfig.getFirebase();
  }

  signUp(email:string,password:string,userName:string){
   return this.firebase.auth().createUserWithEmailAndPassword(email,password)  
  }

  setUserData(data){
    this.userData = data;
    console.log(this.userData);
  }

  login(email:string,password:string){
   return this.firebase.auth().signInWithEmailAndPassword(email,password)
  }

  getUserData():AuthenticatedUserDetails{
    return this.userData;
  }

  checkLoggedIn(){
    this.firebase.auth().onAuthStateChanged(user=>{
      console.log(user);
      if(user!=undefined){
        this.isAuthenticated=true;
        console.log(this.isAuthenticated);
      }
      else{
        this.isAuthenticated=false;
        console.log(this.isAuthenticated);
      }
    })
    
  }

  getIsAuthenticated():boolean{
    return this.isAuthenticated;
  }

  logout():void{
    return this.firebase.auth().signOut();
  }

}