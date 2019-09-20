namespace listing_service.Models
{
    public interface IProduct
    {
        string Id { get; set; }
        string ProductName { get; set; }
        string Image { get; set; }
        string From { get; set; }
        string Nutrients { get; set; }
        string Quantity { get; set; }
        double Price { get; set; }
        bool Organic { get; set; }
        string Description { get; set; }
    }
}