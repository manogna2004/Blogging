import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log('Error fetching post', err));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {user && <Link to={`/edit-post/${id}`}><button>Edit Post</button></Link>}
        </div>
    );
}
