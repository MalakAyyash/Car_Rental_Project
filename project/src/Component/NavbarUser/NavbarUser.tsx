import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarUser() {
  const signOut = () =>{
    localStorage.removeItem('userData');
  }
  return (
    <div>
        <nav className="navbar bg-dark  border">
        <div className="container">
        <a className="navbar-brand" href="#">
        <h4 className=" logoTitle text-light">Car Rental</h4>
        </a>
        </div>
        <Link to="/login"><button className="text-decoration-none text-light btn" onClick = {signOut}>Sign out</button></Link>
        </nav>

    </div>
  )
  }