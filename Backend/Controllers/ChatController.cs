using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        [HttpPost("send")]
        public IActionResult SendMessage([FromBody] ChatMessage message)
        {
            Console.WriteLine($"Received message: {message?.User}, {message?.Content}, {message?.Timestamp}");
            return Ok(new { status = "Message sent", message });
        }

        // Endpoint to retrieve messages (placeholder)
        [HttpGet("messages")]
        public IActionResult GetMessages()
        {
            // Placeholder logic for retrieving messages
            return Ok(new { messages = "Message history will go here" });
        }

        // Test route to ensure the controller is working
        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("ChatController is working!");
        }
    }
}
