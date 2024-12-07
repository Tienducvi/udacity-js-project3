import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { NotificationModule } from './notification/notification.module';
import { ProductItemModule } from './product-item/product-item.module';
import { ProductItemDetailModule } from './product-item-detail/product-item-detail.module';
import { ProductListModule } from './product-list/product-list.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavBarModule,
    NotificationModule,
    ProductItemModule,
    ProductItemDetailModule,
    ProductListModule,
    FormsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
