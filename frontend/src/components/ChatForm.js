import React, { useState } from "react";

function ChatForm() {
    const [user, setUser] = useState("");
    const [content, setContent] = useState("");

    const sendMessage = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user,
                    content,
                    timestamp: new Date().toISOString(),
                }),
            });
            const data = await response.json();
            console.log("Response:", data);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div>
            <h2>Send a Message</h2>
            <input
                type="text"
                placeholder="User"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <textarea
                placeholder="Message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
}

export default ChatForm;
