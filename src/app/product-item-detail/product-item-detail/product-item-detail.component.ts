import { Component, Input, OnInit } from '@angular/core';
import productModel from 'src/app/models/product';
import { CartService } from 'src/app/cart/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsSettingServiceService } from 'src/app/product-list/products-setting-service.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{

  productId !: number
  product!: productModel
  selectedAmount : number = 0;
  
  constructor(private route: ActivatedRoute,private cartService : CartService, private productSettingService: ProductsSettingServiceService) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;   
    this.productSettingService.getProductById(this.productId).subscribe((data) => {
      if(data) {
        this.product = data
        this.selectedAmount = this.cartService.showCartItem().products.filter(prod => prod.id == data.id)[0].amount
      }
    })
    
  }

  onSubmit() {
    this.product.amount = this.selectedAmount;
    this.cartService.addOrEditCartItem(this.product);
    alert("Added to cart")
  }

}
