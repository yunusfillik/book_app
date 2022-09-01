import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryListRoutingModule } from './delivery-list-routing.module';
import { DeliveryListComponent } from './delivery-list.component';
import { SharedModule } from 'src/app/components/shared.module';


@NgModule({
  declarations: [
    DeliveryListComponent
  ],
  imports: [
    CommonModule,
    DeliveryListRoutingModule,
    SharedModule
  ]
})
export class DeliveryListModule { }
