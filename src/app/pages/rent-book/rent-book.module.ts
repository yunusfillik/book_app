import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentBookRoutingModule } from './rent-book-routing.module';
import { RentBookComponent } from './rent-book.component';
import { SharedModule } from 'src/app/components/shared.module';


@NgModule({
  declarations: [
    RentBookComponent
  ],
  imports: [
    CommonModule,
    RentBookRoutingModule,
    SharedModule
  ]
})
export class RentBookModule { }
