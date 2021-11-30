import {Component, OnInit} from '@angular/core';
import Customer from '../../../../models/Customer';
import {DataProviderService} from '../../../core/services/data-provider.service';
import Order from '../../../../models/Order';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  columns = ['company', 'contact', 'city', 'country', 'ordersButton'];
  orders: Order[] = [];
  customerName = '';

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
    this.dataProvider.getCustomers().subscribe(customers => this.customers = customers);
  }

  showOrders(customer: Customer): void {
    this.customerName = customer.contactName;
    this.dataProvider.getOrdersForCustomer(customer.id).subscribe(orders => this.orders = orders);
  }

  sort(sort: Sort): void {
    this.customers = this.customers.slice().sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'company':
          return this.compare(a.companyName, b.companyName, isAsc);
        case 'contact':
          return this.compare(a.contactName, b.contactName, isAsc);
        case 'city':
          return this.compare(a.city, b.city, isAsc);
        case 'country':
          return this.compare(a.country, b.country, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
