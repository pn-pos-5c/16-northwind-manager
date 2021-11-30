import {Component, Input, OnInit} from '@angular/core';
import OrderDetail from '../../../models/OrderDetail';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderDetails!: OrderDetail[];
  @Input() order = -1;
  columns = ['quantity', 'unitPrice', 'product'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
