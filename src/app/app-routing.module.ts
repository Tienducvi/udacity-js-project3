import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail/product-item-detail.component';
import { NotifiactionComponent } from './notification/notifiaction/notifiaction.component';

const routes: Routes = [
  {path:'products', component: ProductListComponent},
  {path:'products/:id', component: ProductItemDetailComponent},
  {path:'cart', component: CartComponent},
  {path: 'notification', component: NotifiactionComponent},
  {path:'', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
