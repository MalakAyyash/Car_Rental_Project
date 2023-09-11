import React, {useState } from 'react';
import AddBtn from '../AddBtn/AddBtn.tsx';


export default function Navbar() {
  const [addClicked , setAddClicked] = useState(false);  

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
        <button className='ms-auto rounded' onClick={() => add()}><i className="fa-solid fa-plus"></i></button>
        {addClicked ?<AddBtn  setAddClicked={setAddClicked} />:null} 
        </div>
        </nav>

    </div>
  )
  }