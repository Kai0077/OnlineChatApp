import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; 

function ChatForm() {
    const [user, setUser] = useState("");
    const [content, setContent] = useState("");

    const sendMessage = async () => {
        try {
            // gemmer besked i Firestore
            await addDoc(collection(db, "messages"), {
                user,
                content,
                timestamp: Timestamp.now(), 
            });
            console.log("Message sent!");
            setUser(""); 
            setContent(""); 
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
