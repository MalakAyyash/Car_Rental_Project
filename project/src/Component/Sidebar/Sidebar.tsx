import './Sidebar.css';
import React from 'react'



export default function Sidebar({storedData}) {
const parsedData = JSON.parse(storedData);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark sidebar border border-top-0" >
        <span className="fs-4  d-flex align-items-center justify-content-center"><img src= {parsedData.photo} alt="personal img"  className ="w-75" />
    </span>
      <hr className='text-light'/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link bg-light active text-dark" aria-current="page">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
            Cars
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-light">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
            History
          </a>
        </li>
      </ul>
     
    </div>
    
      )
}
 
