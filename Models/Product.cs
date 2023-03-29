using System.ComponentModel.DataAnnotations;

namespace ViettelIDC.ATMExample.Website.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Display(Name = "Tên")]
        public string Name { get; set; }
        [Display(Name = "Giá")]
        public int Price { get; set; }
        [Display(Name = "Trạng thái")]
        public int Status { get; set; }
    }
}
