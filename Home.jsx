import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import blogIcon from '../assets/blogicon2.jpg'; // Import the image

export default function Home() {
    return (
        <div className="home-container">
            {/* Blogging Image */}
            <div className="blog-image-container">
                <img src={blogIcon} alt="Blogging" className="blog-image" />
            </div>

            {/* Hero Section */}
            <header className="hero">
                <h1>Your Story, Your Way</h1>
                <p>Start your free blog today and share your ideas with the world.</p>
                <Link to="/register" className="btn-primary">Get Started</Link>
            </header>

            {/* Features Section */}
            <section className="features">
                <div className="feature">
                    <h2>Easy to Use</h2>
                    <p>Set up your blog in minutes with our user-friendly interface.</p>
                </div>
                <div className="feature">
                    <h2>Customize Your Style</h2>
                    <p>Choose from a variety of themes and make your blog unique.</p>
                </div>
                <div className="feature">
                    <h2>Monetize Effortlessly</h2>
                    <p>Earn from your content with built-in monetization options.</p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Join Millions of Bloggers</h2>
                <p>Share your voice, connect with readers, and build your online presence.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
        <Link to="/login">
          <button style={{
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            background: 'linear-gradient(45deg, #6b6bff, #8e53ff)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            transition: '0.3s',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}
          onMouseOver={(e) => e.target.style.background = 'linear-gradient(45deg, #4757ff, #6b6bff)'}
          onMouseOut={(e) => e.target.style.background = 'linear-gradient(45deg, #6b6bff, #8e53ff)'}>
            🔑 Login
          </button>
        </Link>

        <Link to="/register">
          <button style={{
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            background: 'linear-gradient(45deg, #ff6b6b, #ff8e53)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            transition: '0.3s',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}
          onMouseOver={(e) => e.target.style.background = 'linear-gradient(45deg, #ff4757, #ff6b6b)'}
          onMouseOut={(e) => e.target.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e53)'}>
            📝 Register
          </button>
        </Link>
      </div>
            </section>
        </div>
    );
}
