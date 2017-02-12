using ASPNETCoreAngular2Demo.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using ASPNETCoreAngular2Demo.Configurations;

namespace BTCMinerApp
{
    public class Startup
    {
        //setup Configuration
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
             var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

           
            if(env.IsDevelopment())
            {
                //for morebuilder.
                //builder.AddUserSecrets();

                //telemtry
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //add Identity Server 4
            services.AddIdentityServer()
                .AddTemporarySigningCredential()
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients());

            //add the database of IdentityRole
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));
            
            //add the database for BitcoinMiner
            services.AddDbContext<BitcoinMinerStorageDb>(options =>
                options.UseSqlServer(Configuration["BtcMinerData:ConnectionString"]));

            //adding Identity to the model
            services.AddIdentity<ApplicationUser, IdentityRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>()
                    .AddDefaultTokenProviders();

            services.AddCors();

            services.AddMvcCore()
                .AddJsonFormatters(options => options.ContractResolver = new CamelCasePropertyNamesContractResolver());

        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory, IHostingEnvironment env)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
         
           if(env.IsDevelopment())
           {
              /* app.UseDeveloperExceptionPage();
               app.UseDatabaseErrorPage();
               app.UseBrowserLink();*/
           }

            app.UseCors(config =>
                config.AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin());

            app.UseDefaultFiles();
            app.UseStaticFiles();

            //use Identity
            app.UseIdentity();
            //authroizatoin
            //app.UseMiddleware<AuthorizationMiddleware>();

            app.UseMvc();

            //add identity server
            app.UseIdentityServer(); 
        }
    }
}
