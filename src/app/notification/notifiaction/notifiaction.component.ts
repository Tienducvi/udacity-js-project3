import { Component, OnInit } from '@angular/core';
import cartModel from 'src/app/models/cart';
import { CartService } from 'src/app/cart/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifiaction',
  templateUrl: './notifiaction.component.html',
  styleUrls: ['./notifiaction.component.css']
})
export class NotifiactionComponent implements OnInit {
  
  cart!: cartModel

  constructor(private cartService : CartService, private router : Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.showCartItem();
  }

  navigateHome() {
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
