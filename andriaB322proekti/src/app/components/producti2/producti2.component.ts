import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-producti2',
  templateUrl: './producti2.component.html',
  styleUrl: './producti2.component.scss'
})
export class Producti2Component {
  products:any
  categories:any
  nuts:boolean = false
  spiciness:any = "Not Chosen"
  spicinessValue:any = 0
  constructor(public apiService:ApiService) {
    apiService.getAllProducts()
  }

  ngOnInit(){
    this.apiService.getAllCategories().subscribe((data:any) =>{
      this.categories =data
    });
  }
 
  categoryFilter(id: any) {
    this.apiService.getCategoryById(id).subscribe((data: any) => {
      this.products = data.products
    })
  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe((data) => {
      this.products = data
    })
  }

  spicinessChange(){
    if(this.spicinessValue == 0){
      this.spiciness = "Not Chosen"
    }else {
      this.spiciness = this.spicinessValue - 1
    }
  }

  reset() {
    this.spiciness = "Not Chosen"
    this.spicinessValue = 0
  }

  filter() {

  }
}
