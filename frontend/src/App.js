import React, { useState } from "react";
import ChatForm from "./components/ChatForm";
import ChatMessageList from "./components/ChatMessageList";
import Login from "./components/Login";

function App() {
    const [user, setUser] = useState(null); // Track the logged-in user

    return (
        <div>
            <h1>Chat Application</h1>
            {!user ? ( // Show the Login component if no user is logged in
                <Login setUser={setUser} />
            ) : (
                <div>
                    <p>Welcome, {user.displayName}!</p>
                    <ChatForm />
                    <ChatMessageList />
                </div>
            )}
        </div>
    );
}

export default App;
