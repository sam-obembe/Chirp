import { Component ,OnInit} from '@angular/core';
import { FirebaseConfigService } from './Services/firebase/firebase-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chirp-front-end';
  constructor(private firebaseService:FirebaseConfigService){
    console.log(this.firebaseService.getConfig());
  }

  ngOnInit(){
  }
}
