using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        IMongoDatabase db;

        public WeatherForecastController(IMongoClient mongoClient)
        {
            this.db = mongoClient.GetDatabase("sample_mflix");
        }

        [HttpGet("ping")]
        public IActionResult Ping()
        {
            try
            {
                var result = db.GetCollection<BsonDocument>("comments");
                Console.WriteLine("Pinged your deployment. You successfully connected to MongoDB!");
                return Ok("Ping successful!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ping failed: {ex.Message}");
            }
        }
    }
}
