using System.ComponentModel.DataAnnotations;

namespace ViettelIDC.ATMExample.Website.Models
{
    public class Order
    {
        public int Id { get; set; }
        [Display(Name = "Mã đơn hàng")]
        public string Code { get; set; }
        public int Status { get; set; }
        [Display(Name = "Sản phẩm")]
        public int ProductId { get; set; }
    }

    public class OrderDetail
    {
        public int Id { get; set; }
        [Display(Name = "Mã đơn hàng")]
        public string Code { get; set; }
        [Display(Name = "Trạng thái đơn hàng")]
        public int Status { get; set; }
        public int ProductId { get; set; }
        [Display(Name = "Tên sản phẩm")]
        public string ProductName { get; set; }
        [Display(Name = "Giá")]
        public int Price { get; set; }
    }
}
