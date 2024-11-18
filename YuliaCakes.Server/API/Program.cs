using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// MongoDB Configuration
string connectionString = builder.Configuration.GetConnectionString("MongoDb");
var settings = MongoClientSettings.FromConnectionString(connectionString);
settings.ServerApi = new ServerApi(ServerApiVersion.V1);
var mongoClient = new MongoClient(settings);

// Register the MongoClient in the DI container
builder.Services.AddSingleton<IMongoClient>(mongoClient);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
