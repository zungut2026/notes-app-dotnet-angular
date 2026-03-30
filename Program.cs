var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddControllers();

builder.Services.AddScoped<NoteRepository>();
builder.Services.AddScoped<NoteService>();

var app = builder.Build();

app.Urls.Add("http://localhost:5000");

app.UseCors("AllowAll");


try
{
    app.MapControllers();
}
catch (Exception ex)
{
    Console.WriteLine("FULL ERROR:");
    Console.WriteLine(ex.ToString());
    throw;
}
app.MapControllers();



app.Run();