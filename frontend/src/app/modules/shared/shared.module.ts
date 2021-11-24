import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './components/employees/employees.component';
import {CustomersComponent} from './components/customers/customers.component';
import {EllipsisNotationPipe} from './pipes/ellipsis-notation.pipe';


@NgModule({
  declarations: [EmployeesComponent, CustomersComponent, EllipsisNotationPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersComponent,
    EmployeesComponent
  ]
})
export class SharedModule {
}
