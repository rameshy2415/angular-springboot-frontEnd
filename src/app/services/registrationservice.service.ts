import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {
  url:string='http://localhost:8081/registration';

  constructor(private httpclient:HttpClient) { }

  postData(employeeData:any){
    console.log(employeeData);
    let res=this.httpclient.post(this.url,employeeData,{observe:'response'}).subscribe((response: any) =>{
      //console.log(response);
      console.log(response.body);
    }); 
    return res;
  }
}
