import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import { Navigate, RouterProvider, createBrowserRouter, json } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Layout from './Component/Layout/Layout.tsx';
import LoginPage from './Component/LoginPage/LoginPage.tsx';
import Signup from './Component/Signup/Signup.tsx';
import Home from './Component/Home/Home.tsx';
import PageNotFound from './Component/PageNotFound/PageNotFound.tsx';
import CarDetails from './Component/CarDetails/CarDetails.tsx';


function Main() {
  const storedData = localStorage.getItem('userData');

  const router = createBrowserRouter([
    {

      path: '/' ,
      element: <Layout />,
      children: [
        {path: 'login', element:(
         
          storedData? <Home  />:<LoginPage />      
        ),},
      {path: '*', element:<PageNotFound/>},
        {index: true,element: (
          storedData? <Home  />:<LoginPage />
        ),},
        {path: 'Signup', element:<Signup/>},

        {path: "/car-details/:carKey", element:<CarDetails/>},

        
        {path: 'Home', element:(
         
            storedData? <Home/>:<PageNotFound />
      
          ),},
        


      ],
    },
    // {
    //   path: 'admin',
    //   element: <AdminLayout />,
    //   children: [
    //     { path: '', element: <Dashbaord /> },
    //     { path: 'About', element: <About value="massage" /> },
    //     { path: 'Contact', element: <Contact /> },
    //   ],
    // },
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

reportWebVitals();
