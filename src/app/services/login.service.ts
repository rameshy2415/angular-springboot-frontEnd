import { Injectable } from '@angular/core';
import {HttpBackend,HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {NavComponent} from '../nav/nav.component';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string='http://localhost:8081/auth/admin';


  
  constructor(private httpCLient:HttpClient) { }
  loginService(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpCLient.get(this.url,{headers,responseType: 'text' as 'json'}).pipe(
      catchError(this.handleError));

/*     let res=this.httpCLient.get(this.url,{headers,responseType: 'text' as 'json'}).subscribe((response:any)=>{
      console.log(response);
    }); */
   
  }

  handleError(error: HttpErrorResponse){
    console.log(error.status);
    return throwError(error);
    }

  }
