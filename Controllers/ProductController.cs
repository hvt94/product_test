using Microsoft.AspNetCore.Mvc;
using ViettelIDC.ATMExample.Website.Models;
using ViettelIDC.ATMExample.Website.Services;

namespace ViettelIDC.ATMExample.Website.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductClientService _productClientService;

        public ProductController(IProductClientService productClientService)
        {
            _productClientService = productClientService;
        }

        public async Task<IActionResult> Index()
        {
            var productList = await _productClientService.GetListProduct();
            return View(productList);
        }

        public async Task<IActionResult> Detail(int id)
        {
            var product = await _productClientService.GetProductById(id);
            return View(product);
        }

        public async Task<IActionResult> Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Product model)
        {
            if (ModelState.IsValid)
            {
                model.Status = 1;
                var result = await _productClientService.Add(model);
                return RedirectToAction("Index");
            }
            return View();
        }

        public async Task<IActionResult> Edit(int id)
        {
            var model = await _productClientService.GetProductById(id);
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Product model)
        {
            if (ModelState.IsValid)
            {
                var result = await _productClientService.Update(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }


        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _productClientService.Delete(id);
            return new JsonResult(result);
        }
    }
}
