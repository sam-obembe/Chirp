import { Injectable } from '@angular/core';
import { FirebaseConfigService } from '../firebase/firebase-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private firebase;
  constructor(private firebaseConfig:FirebaseConfigService) { 
    this.firebase = firebaseConfig.getFirebase();
  }

  signUp(email:string,password:string){
    this.firebase.auth().createUserWithEmailAndPassword(email,password).then(credential=>console.log(credential)).catch(err=>console.log(err))
  }

  login(email:string,password:string){
    this.firebase.auth().signInWithEmailAndPassword(email,password).then(credential=>console.log(credential)).catch(err=>console.log(err))
  }
}
