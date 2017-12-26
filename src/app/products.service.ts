import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';




@Injectable()
export class ProductsService {
  productObj:any;
  constructor(private http:Http) {

   }
   fetcchData(){
     return this.http.get("http://localhost:333/products")
   }
   
}
