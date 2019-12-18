import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, ValidatorFn }from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('',Validators.required),
    userName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    password: new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(15)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(15)])
  })
  constructor() { }

  ngOnInit() {
  }

  handleSubmit():void{
    console.log(this.signupForm.status)
    let passwordMatch:boolean=this.signupForm.value.password===this.signupForm.value.confirmPassword;
    if(this.signupForm.status!=="INVALID" && passwordMatch){
      console.log(this.signupForm.value)
    }
    else if(!passwordMatch){
      alert("passwords do not match")
    }
  }


}
