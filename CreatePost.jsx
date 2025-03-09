import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/CreatePost.css"; // Ensure styles exist
import BackgroundImage from "../assets/Screenshot 2025-03-09 105921.png"; // Ensure the image is correctly placed

export default function CreatePost() {
    const [post, setPost] = useState({ title: "", content: "" });

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Post Created:", post);
        alert("Post created successfully!");
        setPost({ title: "", content: "" });
    }

    return (
        <div 
            className="create-post-container"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h2 className="post-heading">Create a New Post</h2>
            <form className="post-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={post.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Write your content..."
                    value={post.content}
                    onChange={handleChange}
                    required
                />
                <Link to="/posts"><button>Publish</button></Link>
            </form>
        </div>
    );
}
