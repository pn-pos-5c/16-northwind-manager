using Microsoft.EntityFrameworkCore;
using NorthwindManager.Dtos;
using NorthwindManagerDb;
using System.Collections.Generic;
using System.Linq;

namespace NorthwindManager.Services
{
    public class NorthwindService
    {
        private readonly NorthwindManagerContext db;

        public NorthwindService(NorthwindManagerContext db)
        {
            this.db = db;
        }
        public List<CustomerDto> GetCustomers()
        {
            return db.Customers.Select(customer => new CustomerDto
            {
                City = customer.City,
                Country = customer.Country,
                CompanyName = customer.CompanyName,
                ContactName = customer.ContactName,
                Id = customer.CustomerId
            }).ToList();
        }

        public List<EmployeeDto> GetEmployees()
        {
            return db.Employees.Select(employee => new EmployeeDto
            {
                City = employee.City,
                Country = employee.Country,
                Name = $"{employee.FirstName} {employee.LastName}",
                Id = employee.EmployeeId
            }).ToList();
        }

        public List<OrderDto> GetCustomerOrders(string customerId)
        {
            return db.Orders.Where(order => order.CustomerId.Equals(customerId))
                .Select(order => new OrderDto
                {
                    Id = order.OrderId,
                    NrOrderDetails = order.OrderDetails.Count,
                    OrderDate = order.OrderDate,
                    RequiredDate = order.RequiredDate,
                    ShippedDate = order.ShippedDate
                }).ToList();
        }

        public List<OrderDto> GetEmployeeOrders(int employeeId)
        {
            return db.Orders.Where(order => order.EmployeeId == employeeId)
                .Select(order => new OrderDto
                {
                    Id = order.OrderId,
                    NrOrderDetails = order.OrderDetails.Count,
                    OrderDate = order.OrderDate,
                    RequiredDate = order.RequiredDate,
                    ShippedDate = order.ShippedDate
                }).ToList();
        }

        public List<OrderDetailsDto> GetOrderDetails(int orderId)
        {
            return db.OrderDetails.Include(x => x.Product)
                .Where(orderDetail => orderDetail.OrderId == orderId)
                .Select(orderDetail => new OrderDetailsDto
                {
                    Quantity = orderDetail.Quantity,
                    UnitPrice = orderDetail.UnitPrice,
                    ProductName = orderDetail.Product.ProductName,
                    OrderId = orderDetail.OrderId
                }).ToList();
        }
    }
}
