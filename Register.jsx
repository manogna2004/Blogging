import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export default function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/signup', formData)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                setUser({ token: res.data.token });
                navigate('/');
            })
            .catch((err) => console.log('Registration error', err));
    }

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange} required />
                    <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
