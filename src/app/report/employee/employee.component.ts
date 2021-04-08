import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormControl, FormGroup,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employeedata= new FormGroup({
   fromDate: new FormControl('',Validators.required),
  //  toDate:new FormControl(''),
   employeeId: new FormControl('')
  })

}
