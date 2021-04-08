import { OnInit } from '@angular/core';
import{FreeAPIserviceService} from '../services/free-apiservice.service';

export class Post implements OnInit{
    constructor(private freeAPI:FreeAPIserviceService){}
    ngOnInit(): void {
        
    }
    userId:number;
    id : number;
    title:string;
    body:string;
}
