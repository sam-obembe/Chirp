import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, ValidatorFn }from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { MyhttpService } from 'src/app/Services/MyHttpService/myhttp.service';
import { stringify } from 'querystring';
import {Router} from '@angular/router'


interface Credentials{userID:string, userName:string}

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

  constructor(private authService:AuthenticationService,private myHttp: MyhttpService,private router:Router) { 
 
  }

  ngOnInit() {
  }

  handleSubmit(){
    console.log(this.signupForm.status)
    let passwordMatch:boolean = this.signupForm.value.password===this.signupForm.value.confirmPassword;
    
    if(this.signupForm.status!=="INVALID" && passwordMatch){

      let {email,password,userName} = this.signupForm.value

      this.authService.signUp(email,password,userName).then(credentials=>{
        let uid = credentials.user.uid;
        this.myHttp.registerUserInDB(uid,userName).subscribe(res=>{
          this.authService.setUserData(res);
          this.signupForm.reset();
          this.router.navigateByUrl('home');
        })
      })
    }

    else if(!passwordMatch){
      alert("passwords do not match")
    }
  }


}
