import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './Component/Layout/Layout.tsx';
import LoginPage from './Component/LoginPage/LoginPage.tsx';
import Signup from './Component/Signup/Signup.tsx';
import Home from './Component/Home/Home.tsx';
import HomeUser from './Component/HomeUser/HomeUser.tsx';
import History from './Component/History/History.tsx';
import PageNotFound from './Component/PageNotFound/PageNotFound.tsx';
import CarDetails from './Component/CarDetails/CarDetails.tsx';
import UserCarDetails from './Component/UserCarDetails/UserCarDetails.tsx';

function Main({ isUser }) {
  const router = createBrowserRouter([
    // ===============================ADMIN===========================
    { 
      path: '/' ,
      element: <Layout />,
      children: [
        {path: 'login', element: (
          isUser ? <HomeUser />: <Home /> 
        )},
        {path: '*', element: <PageNotFound/>},
        {index: true, element: (
          isUser ? <HomeUser /> : <Home /> 
        )},
        {path: 'Signup', element: <Signup/>},
        {path: "/car-details/:carKey", element: <CarDetails/>},
        {path: 'Home', element: (
          isUser ? <HomeUser /> : <Home/>
        )},
        {path: "history", element: <History/>},
      ],
    },
    // ======================================USER=======================
    {
      path: 'user',
      element: <Layout />,
      children: [
        {path: 'login', element: (
          isUser ? <HomeUser /> : <LoginPage />
        )},
        {path: '*', element: <PageNotFound/>},
        {index: true, element: (
          isUser ? <HomeUser /> : <LoginPage />
        )},
        {path: 'Signup', element: <Signup/>},
        {path: "car-details/:carKey", element: <UserCarDetails/>},
        {path: 'user-Home', element: (
          isUser ? <HomeUser /> : <PageNotFound />
        )},
        {path: "history", element: <History/>},
      ],
    },
  
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

const storedData = localStorage.getItem('userData');
const isUser = storedData && JSON.parse(storedData).role === 'user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main isUser={isUser} />);
reportWebVitals();
