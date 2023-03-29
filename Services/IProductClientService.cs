using ViettelIDC.ATMExample.Website.Models;

namespace ViettelIDC.ATMExample.Website.Services
{
    public interface IProductClientService
    {
        Task<IEnumerable<Product>> GetListProduct();
        Task<Product> GetProductById(int id);
        Task<Product> Add(Product product);
        Task<Product> Update(Product product);
        Task<bool> Delete(int id);
    }
}
