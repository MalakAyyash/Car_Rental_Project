import React, {useState } from 'react';
import AddBtn from '../AddBtn/AddBtn.tsx';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [addClicked , setAddClicked] = useState(false);
  const signOut = () =>{
    localStorage.removeItem('userData');
  }
  function add() {
    setAddClicked(true)
  }
  return (
    <div>
        <nav className="navbar bg-dark  border">
        <div className="container">
        <a className="navbar-brand" href="#">
        <h4 className=" logoTitle text-light">Car Rental</h4>
        </a>
        <button className='ms-auto rounded' onClick={() => add()}>Add Car</button>
        {addClicked ?<AddBtn  setAddClicked={setAddClicked} />:null} 
        <div className="d-flex align-items-center text-white text-decoration-none show" >
        <Link to="/login"><button className="text-decoration-none text-light btn" onClick = {signOut}>Sign out</button></Link>
      </div> 
        </div>
        </nav>
    </div>
  )
  }