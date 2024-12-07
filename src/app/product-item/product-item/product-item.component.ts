import { Component, Input, OnInit } from '@angular/core';
import productModel from 'src/app/models/product';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product !: productModel;
  selectedAmount : number = 0;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.selectedAmount = this.cartService.showCartItem().products.filter(prod => prod.id == this.product.id)[0].amount
  }

  onSubmit() {
    this.product.amount = this.selectedAmount;
    this.cartService.addOrEditCartItem(this.product);
    alert("Added to cart")
  }
}