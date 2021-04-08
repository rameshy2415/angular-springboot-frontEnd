import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  url:string;
  data:[];
  constructor(private htttp:HttpClient) { 
    this.url='http://localhost:8081/upload';
  }
  uploadImage(uploadImageData:any){

   let data= this.htttp.post(this.url,uploadImageData,{observe:'response'}).subscribe((response: any) =>{
      console.log(response);
      //this.data=response[0];
    });
  }
}
