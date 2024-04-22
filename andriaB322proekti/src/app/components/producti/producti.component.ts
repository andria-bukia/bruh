import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-producti',
  templateUrl: './producti.component.html',
  styleUrl: './producti.component.scss'
})
export class ProductiComponent {
  products:any

  constructor(public apiService:ApiService) {
    apiService.getAllProducts()
  }

  ngOnInit(){
    this.apiService.getAllProducts().subscribe((data:any) =>{
      this.products =data
    });
  }
}
