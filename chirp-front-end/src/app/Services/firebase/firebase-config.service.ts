import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/auth";
/*import "firebase/storage"; going to need this for cloud storage later*/
import config from './firebaseConfig.js';


@Injectable({
  providedIn: 'root'
})

export class FirebaseConfigService {
  private firebaseConfig = config;
  private firebase;
  constructor() { 
    this.firebase=firebase.initializeApp(config);
  }

  getConfig(){
    return this.firebaseConfig;
    
  }

  getFirebase(){
    return this.firebase;
  }
}
