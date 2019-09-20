using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace listing_service.Models
{
    public class Product : IProduct
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("productName")]
        public string ProductName { get; set; }
        [BsonElement("image")]
        public string Image { get; set; }
        [BsonElement("from")]
        public string From { get; set; }
        [BsonElement("nutrients")]
        public string Nutrients { get; set; }
        [BsonElement("quantity")]
        public string Quantity { get; set; }
        [BsonElement("price")]
        public double Price { get; set; }
        [BsonElement("organic")]
        public bool Organic { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
    }
}