import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  exports: [
    ProductItemComponent
  ]
})
export class ProductItemModule { }
