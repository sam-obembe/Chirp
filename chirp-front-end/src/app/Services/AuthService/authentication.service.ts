import { Injectable } from '@angular/core';
import { FirebaseConfigService } from '../firebase/firebase-config.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private firebase;
  private userData;
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

  getUserData(){
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

  getIsAuthenticated(){
    return this.isAuthenticated;
  }


}



    /*return this.firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(credential=>{
      let uid = credential.user.uid;
      this.http.post(`${this.domain}/auth/register`,{userId:uid,userName}).subscribe(res=>{
        console.log(res)
        this.userData=res;
        return true;
      })
    })
    .catch(err=>{
      console.log(err)
      return false;
    })*/




        /*.then(credential=>{
      uid= credential.user.uid;
      this.http.post(`${this.domain}/auth/login`,{userId:uid}).subscribe(data=>{
        this.userData = data;
        console.log(this.userData);
        console.log(this.firebase.auth().currentUser);
        return success;
      })
    })
    .catch(err=>{
      console.log(err)
      return false;
    })*/