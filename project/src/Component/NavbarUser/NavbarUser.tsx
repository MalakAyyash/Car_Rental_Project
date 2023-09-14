import React, {useState } from 'react';
import AddBtn from '../AddBtn/AddBtn.tsx';

export default function NavbarUser() {
  return (
    <div>
        <nav className="navbar bg-dark  border">
        <div className="container">
        <a className="navbar-brand" href="#">
        <h4 className=" logoTitle text-light">Car Rental</h4>
        </a>
        </div>
        </nav>

    </div>
  )
  }