using AngularWebApiTree.Database;
using AngularWebApiTree.Models;
using AngularWebApiTree.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//db
builder.Services.AddDbContext<ApplicationDbContext>(option =>
    option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

//Service 
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IJwtService, JwtService>();

//Cors
builder.Services.AddCors(option =>
{
    option.AddPolicy("Angular",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();

        });
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    context.Database.EnsureCreated();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Angular");

app.UseAuthorization();

app.MapControllers();

app.Run();