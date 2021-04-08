import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  flag:boolean=true;
  profileflag:boolean=false;
  user:string='';
  constructor() { }

  ngOnInit() {}

  hideShowNav(username:string){
   this.flag=false;
   this.profileflag=true;
   this.user=username;
  }

}
