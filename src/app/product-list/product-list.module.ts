import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductItemModule } from '../product-item/product-item.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductItemModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule { }
