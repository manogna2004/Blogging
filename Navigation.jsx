import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
    const location = useLocation();

    // Check if the current route is the register or login page
    const isAuthPage = location.pathname === "/register" || location.pathname === "/login" || location.pathname ==="/create-post" || location.pathname ==="/posts";

    return (
        <nav className="navbar">
            <h1 className="logo">My Blog</h1>
            <ul className="nav-links right"> {/* Home link pushed to the right */}
                <li><Link to="/">Home</Link></li>
            </ul>
            {!isAuthPage && ( // Hide login and register buttons if on login or register page
                <ul className="nav-links">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            )}
            {location.pathname ==="/posts" && ( 
                <ul className="nav-links">
                    
                    <li><Link to="create-post">Createpost</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            )}
            {/* {location.pathname ==="/login" && ( 
                <ul className="nav-links">
                    
                    <li><Link to="/">Logout</Link></li>
                </ul>
            )} */}
            
        </nav>
    );
}


