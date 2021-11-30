import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './modules/shared/components/customers/customers.component';
import {EmployeesComponent} from './modules/shared/components/employees/employees.component';
import {InvalidComponent} from './modules/shared/components/invalid/invalid.component';

const routes: Routes = [
  {
    path: 'customers', children: [
      {path: '', component: CustomersComponent},
      {path: ':id/orders', loadChildren: () => import('./modules/orders/orders.module').then(x => x.OrdersModule)}
    ]
  },
  {
    path: 'employees', children: [
      {path: '', component: EmployeesComponent},
      {path: ':id/orders', loadChildren: () => import('./modules/orders/orders.module').then(x => x.OrdersModule)}
    ]
  },
  {path: '**', component: InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
