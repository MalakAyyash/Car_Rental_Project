import './Sidebar.css';
import { Link,  useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Sidebar({storedData}) {
const parsedData = JSON.parse(storedData);
const location = useLocation();
const [activeLink, setActiveLink] = useState('Cars');
const role = parsedData.role;
const hirstoryPath = role === 'admin' ? '/history' : '/user/history';
const listPath = role === 'admin' ? '/Home' : '/user/user-Home';
const [list, setList] = useState(listPath); 
const [hirstory, setHirstory] = useState(hirstoryPath); 


const signOut = () =>{
  localStorage.removeItem('userData');
}

useEffect(() => {
  if (location.pathname === `${hirstory}`) {
    setActiveLink('History');
  } else {
    setActiveLink('Cars');
  }
}, [location.pathname]);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark sidebar border border-top-0" >
        <span className="fs-4  d-flex align-items-center justify-content-center"><img src= {parsedData.photo} alt="personal img"  className ="w-75" />
    </span>
      <hr className='text-light'/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to={`${list}`} className={` text-light nav-link ${activeLink === 'Cars' ? 'active' : ''}`} aria-current="page">
            Cars
          </Link>
        </li>
        <li>
        <Link to={`${hirstory}`} className={` text-light nav-link ${activeLink === 'History' ? 'active' : ''}`}>
            History
          </Link>
        </li>
      </ul>
      <hr></hr>
    <div className="dropdown">
  <div className="d-flex align-items-center text-white text-decoration-none show" >
    <img src={parsedData.photo} alt width={40} height={32} className="rounded-circle me-2" />
    <Link to="/login"><button className="text-decoration-none text-light btn" onClick = {signOut}>Sign out</button></Link>
      </div> 
  
</div>

     
    </div>
    
      )
}
 



 