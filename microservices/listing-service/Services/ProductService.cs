using System;
using System.Collections.Generic;
using listing_service.Models;
using MongoDB.Driver;

namespace listing_service.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService()
        {
            var MONGO_URI = Environment.GetEnvironmentVariable("MONGO_URI");
            var COLLECTION_NAME = Environment.GetEnvironmentVariable("COLLECTION_NAME");
            var DATABASE_NAME = Environment.GetEnvironmentVariable("DATABASE_NAME");
            var client = new MongoClient(MONGO_URI);
            var database = client.GetDatabase(DATABASE_NAME);

            _products = database.GetCollection<Product>(COLLECTION_NAME);
        }

        public List<Product> Get() =>
            _products.Find(product => true).ToList();
    }
}