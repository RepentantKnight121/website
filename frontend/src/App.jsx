import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Admin from './routes/Admin';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  function Menu() {
    return (
      <nav className='flex'>
        <a href="/">Trang chủ</a>
        <a href="/admin">Admin</a>
        <a href="/login">Đăng Nhập</a>
        <a href="/register">Đăng ký</a>
      </nav>
    )
  };

  function Footer() {
    return (
      <footer>Created with React</footer>
    )
  }

  return (
    <div className='flex'>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
