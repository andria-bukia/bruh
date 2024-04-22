import { NgModule, input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MiddleComponent } from './components/middle/middle.component';
import { Middle2Component } from './components/middle2/middle2.component';
import { ProductsComponent } from './components/product/products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductiComponent } from './components/producti/producti.component';
import { BasketComponent } from './components/basket/basket.component';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { Producti2Component } from './components/producti2/producti2.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    Middle2Component,
    ProductsComponent,
    HomePageComponent,
    CartComponent,
    FooterComponent,
    ProductiComponent,
    BasketComponent,
    Producti2Component,
  
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Input,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
