import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Layout from './Component/Layout/Layout.tsx';
import LoginPage from './Component/LoginPage/LoginPage.tsx';
import Signup from './Component/Signup/Signup.tsx';

function Main() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <LoginPage /> },
        {path: 'Signup', element:<Signup/>},
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
