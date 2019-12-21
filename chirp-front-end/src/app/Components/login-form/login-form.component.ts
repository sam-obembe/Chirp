import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { LoginDetails } from 'src/app/Models/login-details';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() loginCredentials = new EventEmitter<LoginDetails>();
  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

  loginClick(){
    if(this.loginForm.status!=="INVALID"){
      let {email,password}= this.loginForm.value;
      this.loginCredentials.emit({email,password});
      this.loginForm.reset();
    }
  }

}
