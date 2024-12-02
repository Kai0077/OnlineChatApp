import React from "react";
import ChatForm from "./components/ChatForm";
import ChatMessageList from "./components/ChatMessageList";

function App() {
    return (
        <div>
            <h1>Chat Application</h1>
            <ChatForm />
            <ChatMessageList />
        </div>
    );
}

export default App;

