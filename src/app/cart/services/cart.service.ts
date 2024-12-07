import { Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import cartModel from 'src/app/models/cart';
import productModel from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  private cart !: cartModel

  constructor(private http : HttpClient) {
    this.cart = {
      id: 0,
      fullName: '',
      address: '',
      creditNumber: '',
      total: 0,
      products: []

    }
   }

  ngOnInit(): void {
    
  }

  addOrEditCartItem(item: productModel) : void {
    if(!this.cart.products.find(product => product.id === item.id)) {
      this.cart.products.push(item);
    } else {
      this.cart.products = this.cart.products.map(product => {
        if (product.id === item.id) {
          return { ...product, ...item };
        }
        return product;
      });
    }
  }

  removeCartitem(item: productModel) : void {
    this.cart.products = this.cart.products.filter(product => product.id !== item.id);
  }

  submitCartItem(cartItem: cartModel) : void {
    this.cart.id = cartItem.id;
    this.cart.address = cartItem.address;
    this.cart.creditNumber = cartItem.creditNumber;
    this.cart.fullName = cartItem.fullName;
    this.cart.total = cartItem.total;
  }

  showCartItem() : cartModel {
    return this.cart;
  }

  clearCart() {
    this.cart.id = 0;
    this.cart.fullName = '';
    this.cart.address = '';
    this.cart.creditNumber = '';
    this.cart.total = 0;
    this.cart.products = [];
  }
}
