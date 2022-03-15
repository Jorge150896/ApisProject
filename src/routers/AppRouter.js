import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';
import AboutPage from '../pages/About/AboutPage';
import ErorrPage from '../pages/Error/ErrorPage';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import PlaceHolderPage from '../pages/PlaceHolder/PlaceHolderPage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import PerfilPage from '../pages/Perfil/PerfilPage';
import TodoPage from '../pages/Todo/TodoPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/fakestore" exact={true} element={<HomePage />} />
        <Route path="/placeholder" exact={true} element={<PlaceHolderPage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
        <Route path="/register" exact={true} element={<RegisterPage />} />{' '}
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="/perfil" exact={true} element={<PerfilPage />} />
        <Route path="/todoapp" exact={true} element={<TodoPage />} />
        <Route path="*" exact={true} element={<ErorrPage />} />
      </Routes>
    </BrowserRouter>
  );
};
