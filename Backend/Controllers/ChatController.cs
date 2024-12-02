using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private static List<ChatMessage> Messages = new List<ChatMessage>();

        [HttpPost("send")]
        public IActionResult SendMessage([FromBody] ChatMessage message)
        {
            Messages.Add(message);
            Console.WriteLine($"Received message: {message.User}, {message.Content}, {message.Timestamp}");
            return Ok(new { status = "Message sent", message });
        }

        [HttpGet("messages")]
        public IActionResult GetMessages()
        {
            return Ok(Messages);
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("ChatController is working!");
        }
    }
}
