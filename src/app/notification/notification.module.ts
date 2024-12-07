import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifiactionComponent } from './notifiaction/notifiaction.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotifiactionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    NotifiactionComponent
  ]

})
export class NotificationModule { }
