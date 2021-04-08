import { Component, OnInit } from '@angular/core';
import { FreeAPIserviceService } from '../services/free-apiservice.service';
import {Post} from '../beans/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Post[];
  constructor(private freeAPI:FreeAPIserviceService) { }

  ngOnInit() {
    this.freeAPI.getPost()
        .subscribe(
            data=>{
            // console.log(data);
             this.posts=data;
        });

        this.freeAPI.getPostUsingParams()
        .subscribe(
          data=>{
            console.log(data);
            
            sessionStorage.setItem("postData",JSON.stringify(data));
          }
        );
    }

  
  }
