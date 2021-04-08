import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'
import {Post} from '../beans/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeAPIserviceService {
  httpHeader:HttpHeaders;
  constructor(private httpClient:HttpClient) { }


getPost():Observable<any>{
  return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
}

getPostUsingParams():Observable<any>{
  ///comments?postId=1
  let param=new HttpParams().set("postId","1");
  //return this.httpClient.get("https://jsonplaceholder.typicode.com/comments?postId=1");
  return this.httpClient.get("https://jsonplaceholder.typicode.com/comments",{params:param});
}

}


/* Routes Configuration
{ path: 'product', component: ProductComponent }
{ path: 'product/:id', component: ProductDetailComponent }

URL
/product         matches => path: 'product'
/product/1       matches => path: 'product/:id'
/product/2       matches => path: 'product/:id' */

/* /product?page=2
<a [routerLink]="['product']" [queryParams]="{ val1:2 , val2:10}">Whatever</a>
<a [routerLink]="['product']" [queryParams]="{ page:2 }">Page 2</a>

URL
/product?val1=2&val2=10 */