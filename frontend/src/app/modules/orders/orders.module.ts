import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './orders/orders.component';
import {MaterialModule} from '../material/material.module';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  exports: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  ]
})
export class OrdersModule {
}
