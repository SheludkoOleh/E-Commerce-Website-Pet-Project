import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {ToastContainer } from "react-toastify";
import Footer from './components/footer/Footer';
import Login  from './pages/auth/Login';
import Register from './pages/auth/Register';
import  Home  from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
