import { Component, OnInit } from '@angular/core';
import { LoginDetails } from 'src/app/Models/login-details';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private authService:AuthenticationService,private myHttp:MyhttpService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(credentials:LoginDetails){
    console.log(credentials)
    this.authService.login(credentials.email,credentials.password).then(loggedInCredentials=>{
      let uid= loggedInCredentials.user.uid;
      this.myHttp.loginUser(uid).subscribe(data=>{
        this.authService.setUserData(data);
        this.authService.checkLoggedIn();
        this.router.navigateByUrl('home');
      })
    });
  }

}
