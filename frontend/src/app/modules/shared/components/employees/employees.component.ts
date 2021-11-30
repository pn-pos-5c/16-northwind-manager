import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../../core/services/data-provider.service';
import Employee from '../../../../models/Employee';
import Order from '../../../../models/Order';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  columns = ['name', 'city', 'country', 'ordersButton'];
  orders: Order[] = [];
  employeeName = '';

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
    this.dataProvider.getEmployees().subscribe(employees => this.employees = employees);
  }

  showOrders(employee: Employee): void {
    this.employeeName = employee.name;
    this.dataProvider.getOrdersForEmployee(employee.id).subscribe(orders => this.orders = orders);
  }
}
