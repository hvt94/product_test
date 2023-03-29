namespace ViettelIDC.ATMExample.Website.Services.HttpClientHelper
{
    public interface IHttpClient
    {
        string GetString(string uri);
        Task<string> GetStringAsync(string uri);
        Task<HttpResponseMessage> PostAsync<T>(string uri, T item);
        Task<HttpResponseMessage> DeleteAsync(string uri);
        Task<HttpResponseMessage> PutAsync<T>(string uri, T item, string requestId = null);
    }
}
