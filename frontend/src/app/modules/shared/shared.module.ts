import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './components/employees/employees.component';
import {CustomersComponent} from './components/customers/customers.component';
import {EllipsisNotationPipe} from './pipes/ellipsis-notation.pipe';
import {CoreModule} from '../core/core.module';
import {MaterialModule} from '../material/material.module';
import {OrdersModule} from '../orders/orders.module';
import { InvalidComponent } from './components/invalid/invalid.component';


@NgModule({
  declarations: [EmployeesComponent, CustomersComponent, EllipsisNotationPipe, InvalidComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    OrdersModule
  ],
  exports: [
    CustomersComponent,
    EmployeesComponent
  ]
})
export class SharedModule {
}
