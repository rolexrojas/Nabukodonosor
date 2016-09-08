using ProductsApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Newtonsoft.Json.Serialization;



namespace ProductsApp.Controllers
{
    public class ProductsController : ApiController
    {
        Product[] products = new  [] 
        { 
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 }, 
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M }, 
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M } 
        };
/*
        public List<Product> GetAllProducts()
        {
           

          //  List<Product> productos = new List<Product>();
            var collection = new List<Product>();
            collection.Add(new Product { Id = 1, Name = "Tomato Soup2", Category = "Groceries", Price = 1 });
            collection.Add(new Product { Id = 2, Name = "Yo-yo2", Category = "Toys", Price = 3.75M });
            collection.Add(new Product { Id = 3, Name = "Hammer2", Category = "Hardware", Price = 16.99M });

            
            dynamic collectionWrapper = new
            {

                productos = collection

            };

          var output = JsonConvert.SerializeObject(collectionWrapper);

          return output;
        }
        */

        public  IEnumerable<Product> GetAllProducts()
        {
            return products;
        }
        
        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
