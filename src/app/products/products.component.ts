import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



confirmMsg:string="Product Added Successfully"
constructor(private http: Http) { }
id:number;
private headers = new Headers({ 'Content-Type': 'application/json'});
products = [];
fetchData = function() {
  this.http.get("http://localhost:333/products").subscribe(
    (res: Response) => {
      this.products = res.json();
    }
  )
}

deleteProduct = function(id) {
  if(confirm("Are you sure?")) {
    const url = `${"http://localhost:333/products"}/${id}`;
    return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
      this.fetchData();
      })
  }
}

ngOnInit() {
  this.fetchData();
}
}
