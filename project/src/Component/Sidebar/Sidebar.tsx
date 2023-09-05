import React from 'react';
import './Sidebar.css';


export default function Sidebar() {
  return (
<div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar " style={{width: 280}}>
    <span className="fs-4  d-flex align-items-center justify-content-center"><img src="../images/user.jpg" alt="logo"  className ="w-75" />
</span>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
      <a href="#" className="nav-link bg-secondary active" aria-current="page">
        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
        Cars
      </a>
    </li>
    <li>
      <a href="#" className="nav-link link-dark">
        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
        History
      </a>
    </li>
  </ul>
 
</div>

  )
}
