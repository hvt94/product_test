using ViettelIDC.ATMExample.Website.Helper;
using ViettelIDC.ATMExample.Website.Services;
using ViettelIDC.ATMExample.Website.Services.HttpClientHelper;

var builder = WebApplication.CreateBuilder(args);

var appsettings = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddScoped<IOrderClientService, OrderClientService>();
builder.Services.AddScoped<IHttpClient, StandartHttpClient>();
builder.Services.AddScoped<IProductClientService, ProductClientService>();

ApiEndpoint.ProductEndpoint = appsettings.GetValue<string>("ApiEndpoint:ProductEndpoint");
ApiEndpoint.OrderEndpoint = appsettings.GetValue<string>("ApiEndpoint:OrderEndpoint");


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
