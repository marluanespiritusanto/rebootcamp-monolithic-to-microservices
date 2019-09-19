using System.Collections.Generic;
using listing_service.Models;
using MongoDB.Driver;

namespace listing_service.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.CollectionName);
        }

        public List<Product> Get() =>
            _products.Find(product => true).ToList();
    }
}