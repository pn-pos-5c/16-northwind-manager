import {Component, Input, OnInit} from '@angular/core';
import Order from '../../../models/Order';
import {DataProviderService} from '../../core/services/data-provider.service';
import OrderDetail from '../../../models/OrderDetail';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[] = [];
  @Input() name = '';
  columns = ['ordered', 'required', 'shipped', 'nrDetails', 'orderDetailsButton'];
  orderDetails: OrderDetail[] = [];
  order = -1;

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  showOrderDetails(order: Order): void {
    this.order = order.id;
    this.dataProvider.getOrderDetails(order.id).subscribe(orderDetails => this.orderDetails = orderDetails);
  }
}
