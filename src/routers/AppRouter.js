import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';
import AboutPage from '../pages/About/AboutPage';
import HomePage from '../pages/Home/HomePage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/ApisProject/">
      <NavBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="*" exact={true} element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};
