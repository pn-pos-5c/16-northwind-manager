import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './modules/shared/components/customers/customers.component';
import {EmployeesComponent} from './modules/shared/components/employees/employees.component';

const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
