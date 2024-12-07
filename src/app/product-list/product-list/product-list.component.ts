import { Component, OnInit } from '@angular/core';
import { ProductsSettingServiceService } from '../products-setting-service.service';
import productModel from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  products !: productModel[];

  constructor(private productSettingService: ProductsSettingServiceService) {}

  ngOnInit(): void {
    this.productSettingService.getJson().subscribe(data => {
      this.products = data
      
    })
  }

  handleSubmit(name: string) {
    alert(`${name} is added to cart`)
  }

}
