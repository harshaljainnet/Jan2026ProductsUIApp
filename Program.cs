var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseDefaultFiles();  // automatically loads index.html
app.UseStaticFiles();   // enables wwwroot folder

app.Run();
