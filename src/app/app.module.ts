import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbbarComponent } from './navbbar/navbbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateComponent } from './update/update.component';
import { SearchFilterPipe } from './searchFilterPipe';
 
const routes = ([{path:'',component:HomeComponent},{path:'products', component:ProductsComponent},
{path:'update/:id', component:UpdateComponent},
{path:'addproducts', component:AddproductsComponent}])

@NgModule({
  declarations: [
    AppComponent,
    NavbbarComponent,
    HomeComponent,
    ProductsComponent,
    AddproductsComponent,
    UpdateComponent,
    SearchFilterPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
