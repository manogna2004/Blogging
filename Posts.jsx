import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log('Error fetching posts', err));
    }, []);

    return (
        <div>
            <h1>All Blog Posts</h1>
            <div>
                {posts.length === 0 ? (
                    <p>No posts available</p>
                ) : (
                    posts.map(post => (
                        <div key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.content.substring(0, 100)}...</p>
                            <Link to={`/posts/${post._id}`}>Read More</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
