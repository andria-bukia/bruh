import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  products:any
  quantity!:number

  constructor(public apiService:ApiService) {
    apiService.getAllProducts()
  }

  ngOnInit(){
    this.apiService.getBasket().subscribe((data:any) =>{
      this.products =data
    });
  }


  quantityPlus(){
    this.quantity++
  }

  quantityMinus(){
    this.quantity--
  }
}
