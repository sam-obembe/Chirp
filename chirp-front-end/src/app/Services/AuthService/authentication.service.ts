import { Injectable } from '@angular/core';
import { FirebaseConfigService } from '../firebase/firebase-config.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private firebase;
  constructor(private firebaseConfig:FirebaseConfigService,private http:HttpClient) { 
    this.firebase = firebaseConfig.getFirebase();
  }

  signUp(email:string,password:string,userName:string){
    this.firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(credential=>{
      console.log(credential);
      let uid = credential.user.uid;
      this.http.post("http://localhost:8080/auth/register",{userId:uid,userName}).subscribe(res=>console.log(res))
    })
    .catch(err=>console.log(err))
  }

  login(email:string,password:string){
    this.firebase.auth().signInWithEmailAndPassword(email,password).then(credential=>console.log(credential)).catch(err=>console.log(err))
  }
}
