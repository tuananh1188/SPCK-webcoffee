import { useState } from 'react';
import './App.css';
import HomePage from '@components/HomePage/HomePage';
import { Route,Routes } from 'react-router';
import ProductPage from '@components/ProductPage/ProductPage';
import AboutPage from '@components/AboutPage/AboutPage';
import ContactPage from '@components/ContactPage/ContactPage';
import ShopPage from '@components/ShopPage/ShopPage';
import FormRegister from '@components/FormRegister/FormRegister';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';


function App() {
    return (
        <>
        <MyHeader/>
        <div className='App'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<FormRegister/>}/>
            <Route path="/products" element={<ProductPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/shops" element={<ShopPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </div>
        <MyFooter/>
      
            
        </>
    );
}

export default App;
