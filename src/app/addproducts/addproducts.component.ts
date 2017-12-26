import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Http, Headers, Response} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private http:Http,
  private router:Router) { }
  productObj:any
  name:any
  price:any
  brand:any
  image:any
  isAdded:boolean=false
  ngOnInit() {
  }
  addNewProduct(product){
    this.productObj ={
      "image":product.image,
      "name":product.name,
      "brand":product.brand,
      "price":product.price
    }
    this.http.post("http://localhost:333/products/", this.productObj).subscribe((res:Response)=>{
      this.isAdded=true;     
      this.name="",
      this.image="",
      this.brand="",
      this.price="",
      this.router.navigate(['products'])
     
    })
    
  }

}
