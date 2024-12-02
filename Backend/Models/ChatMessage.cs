namespace Backend.Models
{
    public class ChatMessage
    {
        public string User { get; set; }
        public string Content { get; set; }
        public DateTime Timestamp { get; set; }

        public ChatMessage(string user, string content, DateTime timestamp)
        {
            User = user;
            Content = content;
            Timestamp = timestamp;
        }
    }
}