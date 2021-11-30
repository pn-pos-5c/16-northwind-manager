using Microsoft.AspNetCore.Mvc;
using NorthwindManager.Services;

namespace NorthwindManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NorthwindController : ControllerBase
    {
        private readonly NorthwindService northwindService;

        public NorthwindController(NorthwindService northwindService)
        {
            this.northwindService = northwindService;
        }

        [HttpGet("GetCustomers")]
        public IActionResult GetCustomers()
        {
            return Ok(northwindService.GetCustomers());
        }

        [HttpGet("GetEmployees")]
        public IActionResult GetEmployees()
        {
            return Ok(northwindService.GetEmployees());
        }

        [HttpGet("Customers/{customerId}/orders")]
        public IActionResult GetCustomerOrders(string customerId)
        {
            return Ok(northwindService.GetCustomerOrders(customerId));
        }

        [HttpGet("Employees/{employeeId}/orders")]
        public IActionResult GetEmployeeOrders(int employeeid)
        {
            return Ok(northwindService.GetEmployeeOrders(employeeid));
        }

        [HttpGet("Order/{orderId}/details")]
        public IActionResult GetOrderDetails(int orderId)
        {
            return Ok(northwindService.GetOrderDetails(orderId));
        }

    }
}
