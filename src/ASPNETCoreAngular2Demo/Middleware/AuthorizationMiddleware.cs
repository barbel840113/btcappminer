using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ASPNETCoreAngular2Demo.Middleware
{
    public class AuthorizationMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthorizationMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if(context.Request.Headers.Keys.Contains("X-Not-Authorized"))
            {
                    context.Response.StatusCode = 401; //unathorized
                    return;
            }
          
            await _next.Invoke(context);
        }
    }
}