import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Admin from './routes/Admin';
import Login from './routes/Login';
import Register from './routes/Register';

import ReactGif from './images/react.gif'

function App() {
  function Menu() {
    return (
      <nav className='bg-yellow-800 h-20 flex text-white'>
        <a href="./"
           className='p-4'>Trang chủ</a>
        <a href="./admin"
           className='p-4'>Admin</a>
        <a href="./login"
           className='p-4'>Đăng Nhập</a>
        <a href="./register"
           className='p-4'>Đăng ký</a>
      </nav>
    )
  }

  function Footer() {
    return (
      <footer className='m-auto block'>
        <div className='flex justify-center'>
          <div className='text-center'>Created with React</div>
          <img className='h-6 w-6' src={ReactGif} alt='React Gif'/>
        </div>
      </footer>
    )
  }

  return (
    <div>
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
