using ViettelIDC.ATMExample.Website.Models;

namespace ViettelIDC.ATMExample.Website.Services
{
    public interface IOrderClientService
    {
        Task<IEnumerable<OrderDetail>> GetListOrder();
        Task<OrderDetail> GetOrderDetailById(int id);
        Task<Order> GetOrderById(int id);
        Task<Order> Add(Order order);
        Task<Order> Update(Order order);
        Task<bool> Delete(int id);
    }
}
