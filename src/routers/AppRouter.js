import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';
import AboutPage from '../pages/About/AboutPage';
import ErorrPage from '../pages/Error/ErrorPage';
import HomePage from '../pages/Home/HomePage';
import PlaceHolderPage from '../pages/PlaceHolder/PlaceHolderPage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/fakestore" exact={true} element={<HomePage />} />
        <Route path="/placeholder" exact={true} element={<PlaceHolderPage />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="*" exact={true} element={<ErorrPage />} />
      </Routes>
    </BrowserRouter>
  );
};
