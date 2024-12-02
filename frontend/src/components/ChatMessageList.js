import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase"; 

function ChatMessageList() {
    const [messages, setMessages] = useState([]);

    // henter messages i real-time
    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedMessages = snapshot.docs.map((doc) => ({
                id: doc.id, // firestore document ID
                ...doc.data(), // document data
            }));
            console.log("Fetched Messages:", fetchedMessages); 
            setMessages(fetchedMessages); // opdaterer state 
        });

        return () => unsubscribe(); // Clean up Firestore listener on component unmount
    }, []);

    return (
        <div>
            <h2>Chat Messages</h2>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <strong>{message.user}:</strong> {message.content}{" "}
                        <em>({new Date(message.timestamp.toDate()).toLocaleString()})</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatMessageList;
