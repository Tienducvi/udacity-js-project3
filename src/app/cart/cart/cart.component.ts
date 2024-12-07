import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import cartModel from 'src/app/models/cart';
import productModel from 'src/app/models/product';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cart !: cartModel
  @ViewChild('form') form!: NgForm;

  constructor(private cartService : CartService, private router : Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.showCartItem();
    this.calculateTotal(this.cart.products && this.cart.products.length > 0 ? this.cart.products[0] : undefined);
    console.log(this.cart.total);  
  }


  validateForm(): void {
    Object.keys(this.form.controls).forEach((controlName) => {
      const control = this.form.controls[controlName];
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }
  
  calculateTotal(product : productModel | undefined) {
    if(!product) {
      return;
    }

    if(product.amount <= 0) {
      this.cartService.removeCartitem(product);
      this.cart = this.cartService.showCartItem();
    }

    this.cart.total = 0
    this.cart.products.forEach(product => {
      this.cart.total += product.amount * product.price;
    });
    this.cart.total = (Math.round(this.cart.total * 100))/100;

    if(product.amount <= 0) {
      alert('Removed from cart!')
    }
  }

  submitForm(form: any) {
    this.validateForm();
    if (form.valid)
    this.cartService.submitCartItem(this.cart);
    this.router.navigate(['/notification']);
  }
}
