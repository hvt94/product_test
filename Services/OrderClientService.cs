using Newtonsoft.Json;
using ViettelIDC.ATMExample.Website.Helper;
using ViettelIDC.ATMExample.Website.Models;
using ViettelIDC.ATMExample.Website.Services.HttpClientHelper;

namespace ViettelIDC.ATMExample.Website.Services
{
    public class OrderClientService : IOrderClientService
    {
        private readonly IHttpClient _httpClient;
        private readonly string _serviceUri;
        public OrderClientService(IHttpClient httpClient)
        {
            _httpClient = httpClient;
            _serviceUri = $"{ApiEndpoint.OrderEndpoint}";
        }

        public async Task<Order> Add(Order order)
        {
            var url = string.Format("{0}/add", _serviceUri);
            var response = await _httpClient.PostAsync(url, order);
            if (response != null && response.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<Order>(await response.Content.ReadAsStringAsync());
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

        public async Task<IEnumerable<OrderDetail>> GetListOrder()
        {
            try
            {
                var url = string.Format("{0}/get-list-order", _serviceUri);
                var response = await _httpClient.GetStringAsync(url);
                return JsonConvert.DeserializeObject<IEnumerable<OrderDetail>>(response);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<OrderDetail> GetOrderDetailById(int id)
        {
            try
            {
                var url = string.Format("{0}/get-detail-by-id/{1}", _serviceUri, id);
                var response = await _httpClient.GetStringAsync(url);
                return JsonConvert.DeserializeObject<OrderDetail>(response);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Order> GetOrderById(int id)
        {
            try
            {
                var url = string.Format("{0}/get-by-id/{1}", _serviceUri, id);
                var response = await _httpClient.GetStringAsync(url);
                return JsonConvert.DeserializeObject<Order>(response);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Order> Update(Order product)
        {
            var url = string.Format("{0}/update", _serviceUri);
            var response = await _httpClient.PutAsync(url, product);
            if (response != null && response.IsSuccessStatusCode)
                return JsonConvert.DeserializeObject<Order>(await response.Content.ReadAsStringAsync());
            return null;
        }
    }
}
