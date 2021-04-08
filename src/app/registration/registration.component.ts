import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {ReactiveFormsModule,FormControl, FormGroup,Validators} from '@angular/forms';
import {RegistrationserviceService} from '../services/registrationservice.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  constructor(private regService:RegistrationserviceService) {
  }

 ngOnInit() {
  console.log('on init ..called')
  console.log(sessionStorage.getItem("postData"));
 }
dobirth:string;
res :any;

 employeeProfile = new FormGroup({
   fname: new FormControl('',Validators.required),
   mname:new FormControl(''),
   lname: new FormControl(''),
   password: new FormControl(''),
   email: new FormControl(''),
   mob: new FormControl(''),
   aadharno: new FormControl(''),
   dob: new FormControl(''),
   gender: new FormControl(''),
   maritalStatus: new FormControl(''),
   fathername: new FormControl(''),
   mothername: new FormControl(''),
   multiskill:new FormControl(''),
   term_condition:new FormControl('')
 });

 skills: string[] = ['JAVA', 'Spring', 'SpringBoot', 'Hibernate', 'C++', '.Net'];


 onSubmit(){
 //console.log(this.employeeProfile.controls['dob'].value);
 this.dobirth=this.employeeProfile.controls['dob'].value.year+'/'+this.employeeProfile.controls['dob'].value.month+'/'+this.employeeProfile.controls['dob'].value.day;
 this.employeeProfile.controls['dob'].setValue(this.dobirth); 
 this.res=this.regService.postData(this.employeeProfile.value);
 console.log(this.res);

 }

onReset(){
  this.employeeProfile.reset('');
}

 /* The commented code is based on formControl */
  /* fname = new FormControl('');
  mname = new FormControl('');
  lname = new FormControl('');
 
    onSubmit(){
     console.log(this.fname.value);
     console.log(this.mname.value);
     console.log(this.lname.value);
    }

    onReset(){
      this.fname.reset();
      this.mname.reset();
      this.lname.reset();
    } */
}
