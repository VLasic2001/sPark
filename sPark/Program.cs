using sPark;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<SParkContext>(options =>
    {
    var connectionString = builder.Configuration.GetConnectionString("SParkContext");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("https://localhost:7228", "https://localhost:44449");
                      });
});

//builder.Services.AddScoped<IUserRepository, UserRepository>();
//services.AddScoped<IRegisterRepository, RegisterRepository>();
//services.AddScoped<IProductRepository, ProductRepository>();
//services.AddScoped<IReceiptRepository, ReceiptRepository>();

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
