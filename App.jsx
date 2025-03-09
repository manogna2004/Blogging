import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import { AuthProvider } from './context/AuthContext';
import Navigation from './Navigation/Navigation';
import CreatePost from './CreatePost/CreatePost';
import Posts from './Posts/Posts';
import PostDetail from './PostDetail/PostDetail';
import EditPost from './EditPost/EditPost';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
