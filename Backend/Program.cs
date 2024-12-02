var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Add CORS policy to allow frontend requests
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Allow frontend origin
              .AllowAnyMethod()                    // Allow all HTTP methods (GET, POST, etc.)
              .AllowAnyHeader();                   // Allow all headers
    });
});

var app = builder.Build();

// Enable CORS
app.UseCors("AllowFrontend");

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage(); // Show detailed errors in development
}

app.UseHttpsRedirection(); // Redirect HTTP to HTTPS
app.UseRouting();          // Enable endpoint routing
app.UseAuthorization();    // Enable authorization middleware

// Map controller routes
app.MapControllers();

app.Run();
