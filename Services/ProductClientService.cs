using Newtonsoft.Json;
using ViettelIDC.ATMExample.Website.Helper;
using ViettelIDC.ATMExample.Website.Models;
using ViettelIDC.ATMExample.Website.Services.HttpClientHelper;

namespace ViettelIDC.ATMExample.Website.Services
{
    public class ProductClientService: IProductClientService
    {
        private readonly IHttpClient _httpClient;
        private readonly string _serviceUri;
        public ProductClientService(IHttpClient httpClient)
        {
            _httpClient = httpClient;
            _serviceUri = $"{ApiEndpoint.ProductEndpoint}";
        }

        public async Task<Product> Add(Product product)
        {
            var url = string.Format("{0}/add", _serviceUri);
            var response = await _httpClient.PostAsync(url, product);
            if (response != null && response.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<Product>(await response.Content.ReadAsStringAsync());
            return null;
        }

        public async Task<bool> Delete(int id)
        {
            var url = string.Format("{0}/delete/{1}", _serviceUri, id);
            var response = await _httpClient.DeleteAsync(url);
            if (response != null && response.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<bool>(await response.Content.ReadAsStringAsync());
            return false;
        }

        public async Task<IEnumerable<Product>> GetListProduct()
        {
            try
            {
                var url = string.Format("{0}/get-list-product", _serviceUri);
                var response = await _httpClient.GetStringAsync(url);
                return JsonConvert.DeserializeObject<IEnumerable<Product>>(response);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Product> GetProductById(int id)
        {
            try
            {
                var url = string.Format("{0}/get-by-id/{1}", _serviceUri, id);
                var response = await _httpClient.GetStringAsync(url);
                return JsonConvert.DeserializeObject<Product>(response);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Product> Update(Product product)
        {
            var url = string.Format("{0}/update", _serviceUri);
            var response = await _httpClient.PutAsync(url, product);
            if (response != null && response.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<Product>(await response.Content.ReadAsStringAsync());
            return null;
        }
    }
}
