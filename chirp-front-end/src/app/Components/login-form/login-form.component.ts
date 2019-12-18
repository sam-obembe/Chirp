import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email:string;
  password:string;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  onInput(e:string,inputType:string){
    console.log(e);
   if(inputType==="email"){
     this.email=e;
   }
   else if(inputType==="password"){
     this.password=e;
   }
  }

  loginClick(){
    //alert(`${this.email} ${this.password}`);
    this.authService.login(this.email,this.password);
  }

}
