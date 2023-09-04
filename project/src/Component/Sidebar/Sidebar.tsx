import React from 'react';
import './Sidebar.css';


export default function Sidebar() {
  return (
    <div>
      <div className="border border-2 border-black border-top-0 sidebar">
      <div className="border-2 border-black border-bottom ">
        <a href="#"><p className="text-black p-2" id="sidebarLink1" ><img src='#' alt='img' /></p></a>
      </div>
      <div className="border-2 border-black border-bottom ">
        <a href="#"><p className="text-black p-2" id="sidebarLink1" >Car</p></a>
      </div>
      <div className="border-2 border-black border-bottom ">
        <a href="#"><p className="text-black p-2" id="sidebarLink2" >History</p></a>
      </div>
    </div>
    </div>
  )
}
