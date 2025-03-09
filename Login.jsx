import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

export default function Navigation() {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className="navbar">
            <div className="nav-logo">My Blogger</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                {user && <Link to="/create-post">Create Post</Link>}
                {user ? (
                    <Link onClick={logout}>Logout</Link>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}