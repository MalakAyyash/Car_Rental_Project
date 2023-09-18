import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
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

function Main() {
  const storedData = localStorage.getItem('userData');
  const router = createBrowserRouter([
  // ===============================ADMIN===========================
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
    {path: "history", element:<History/>},

  ],
},
// ======================================USER=======================
{
  path: 'user',
  element: <Layout />,
  children: [
    {path: 'login', element:(
      storedData? <HomeUser  />:<LoginPage />      
    ),},
  {path: '*', element:<PageNotFound/>},
    {index: true,element: (
      storedData? <HomeUser  />:<LoginPage />
    ),},
    {path: 'Signup', element:<Signup/>},
    {path: "car-details/:carKey", element:<UserCarDetails/>},
    {path: 'user-Home', element:(
        storedData? <HomeUser/>:<PageNotFound />
      ),},
    {path: "history", element:<History/>},

  ],
},
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