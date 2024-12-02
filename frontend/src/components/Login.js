import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function Login({ setUser }) {
    const auth = getAuth();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Logged in as:", user.displayName);
            setUser(user); // Pass the logged-in user to the parent component
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear the user state
            console.log("Logged out");
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Sign in with Google</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Login;
