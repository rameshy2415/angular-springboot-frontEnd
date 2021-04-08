import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';
import {NavComponent} from '../nav/nav.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  data:any;
  displayFlag:boolean=false;
  nav:NavComponent;
  constructor(private loginGet:LoginService,private router:Router) { }

  ngOnInit() {}

  loginDetails = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });

  login() { 
   // console.log(this.loginDetails.controls['username'].value);
   // console.log(this.loginDetails.controls['password'].value);
   // console.log(this.loginDetails);
    let res=this.loginGet.loginService(this.loginDetails.controls['username'].value,
    this.loginDetails.controls['password'].value);
    res.subscribe(data=>{
      console.log("Response: "+data);
      this.data=data;
     // this.nav.hideShowNav('Ramesh');
      this.router.navigate(["/home"]);
    });
    if('Hello Admin' != this.data){
      this.message="Authencation Failed!!";
      this.displayFlag=true;
    }else{
      this.message="Successfully Authenticated!!";
    }
    
  }
}
