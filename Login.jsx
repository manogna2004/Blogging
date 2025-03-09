import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Ensure you have this CSS file
import BackgroundImage from "../assets/background.jpg"; // Ensure the image is correctly placed


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authentication logic here
        console.log("Logging in with:", email, password);
        navigate("/posts"); // Redirect after successful login
    };

    return (
        <div 
            className="login-container" 
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>Email:</label><br/>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
