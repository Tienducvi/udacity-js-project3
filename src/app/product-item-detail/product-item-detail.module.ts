import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductItemDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  exports: [
    ProductItemDetailComponent
  ]
})
export class ProductItemDetailModule { }
