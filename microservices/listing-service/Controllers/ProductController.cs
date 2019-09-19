using System.Collections.Generic;
using listing_service.Models;
using listing_service.Services;
using Microsoft.AspNetCore.Mvc;

namespace listing_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
         private readonly ProductService _bookService;

        public ProductController(ProductService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public ActionResult<List<Product>> Get() =>
            _bookService.Get();
    }
}
