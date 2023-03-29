using Newtonsoft.Json;
using System.Text;

namespace ViettelIDC.ATMExample.Website.Services.HttpClientHelper
{
    public class StandartHttpClient : IHttpClient
    {
        private readonly HttpClient _httpClient;
        public StandartHttpClient()
        {
            _httpClient = new HttpClient();
        }

        public async Task<HttpResponseMessage> DeleteAsync(string uri)
        {
            var request = new HttpRequestMessage(HttpMethod.Delete, uri);
            return await _httpClient.SendAsync(request);
        }

        public string GetString(string uri)
        {
            var requestMessage = new HttpRequestMessage(HttpMethod.Get, uri);
            var response = _httpClient.Send(requestMessage);
            return response.Content.ToString();
        }

        public async Task<string> GetStringAsync(string uri)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, uri);
            var response = await _httpClient.SendAsync(request);
            return await response.Content.ReadAsStringAsync();
        }

        public async Task<HttpResponseMessage> PostAsync<T>(string uri, T item)
        {
            var request = new HttpRequestMessage(HttpMethod.Post, uri);
            request.Content = new StringContent(JsonConvert.SerializeObject(item), Encoding.UTF8, "application/json");
            var response = await _httpClient.SendAsync(request);
            if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                throw new HttpRequestException(await response.Content.ReadAsStringAsync());
            return response;
        }

        public async Task<HttpResponseMessage> PutAsync<T>(string uri, T item, string requestId = null)
        {
            var request = new HttpRequestMessage(HttpMethod.Put, uri);
            request.Content = new StringContent(JsonConvert.SerializeObject(item), Encoding.UTF8, "application/json");
            request.Headers.Add("x-requestid", requestId);
            var response = await _httpClient.SendAsync(request);
            if (response.StatusCode == System.Net.HttpStatusCode.InternalServerError)
                throw new HttpRequestException(await response.Content.ReadAsStringAsync());
            return response;
        }
    }
}
