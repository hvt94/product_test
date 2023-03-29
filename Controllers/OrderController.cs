using Microsoft.AspNetCore.Mvc;
using ViettelIDC.ATMExample.Website.Models;
using ViettelIDC.ATMExample.Website.Services;

namespace ViettelIDC.ATMExample.Website.Controllers
{
    public class OrderController : Controller
    {
        private readonly IOrderClientService _orderClientService;
        private readonly IProductClientService _productClientService;
        public OrderController(IOrderClientService orderClientService, IProductClientService productClientService)
        {
            _orderClientService = orderClientService;
            _productClientService = productClientService;
        }
        public async Task<IActionResult> Index()
        {
            var orderList = await _orderClientService.GetListOrder();
            return View(orderList);
        }

        public async Task<IActionResult> Create()
        {
            var lstProduct = await _productClientService.GetListProduct();
            ViewData["lstProduct"] = lstProduct;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Order model)
        {
            if (ModelState.IsValid)
            {
                model.Status = 1;
                var result = await _orderClientService.Add(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }

        public async Task<IActionResult> Edit(int id)
        {
            var model = await _orderClientService.GetOrderById(id);
            var lstProduct = await _productClientService.GetListProduct();
            ViewData["lstProduct"] = lstProduct;
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Order model)
        {
            if (ModelState.IsValid)
            {
                var result = await _orderClientService.Update(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }

        public async Task<IActionResult> Detail(int id)
        {
            var model = await _orderClientService.GetOrderDetailById(id);
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _orderClientService.Delete(id);
            return new JsonResult(result);
        }
    }
}
