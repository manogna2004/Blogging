import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function EditPost() {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', content: '' });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/${id}`)
            .then(res => setFormData(res.data))
            .catch(err => console.log('Error fetching post', err));
    }, [id]);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/posts/${id}`, formData, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
        .then(() => navigate('/posts'))
        .catch(err => console.log('Error updating post', err));
    }

    return (
        <div>
            <h2>Edit Post</h2>
            <form>
                <div>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <textarea name="content" value={formData.content} onChange={handleChange} required />
                </div>
                <button onClick={handleSubmit}>Update</button>
            </form>
        </div>
    );
}
