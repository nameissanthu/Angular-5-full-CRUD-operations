import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
brown:boolean=false;
blue:boolean=false;
red:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  browncolor(){
   if(this.brown==true){
     this.brown=false
   }else{
     this.brown=true
   }
    }
    bluecolor(){
      if(this.blue==true){
        this.blue=false
      }else{
        this.blue=true
    }

}
redcolor(){
  if(this.red==true){
    this.red=false
  }else{
    this.red=true
}

}
}
