import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Customer from '../../../models/Customer';
import Employee from '../../../models/Employee';
import Order from '../../../models/Order';
import OrderDetail from '../../../models/OrderDetail';

@Injectable()
export class DataProviderService {
  private rootUrl = 'http://localhost:5000/Northwind';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.rootUrl}/GetCustomers`);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.rootUrl}/GetEmployees`);
  }

  getOrdersForCustomer(customerId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.rootUrl}/Customers/${customerId}/orders`);
  }

  getOrdersForEmployee(employeeId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.rootUrl}/Employees/${employeeId}/orders`);
  }

  getOrderDetails(orderId: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(`${this.rootUrl}/Order/${orderId}/details`);
  }
}
