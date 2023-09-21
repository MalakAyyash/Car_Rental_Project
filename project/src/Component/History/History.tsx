import React from 'react'
import NavbarUser from '../NavbarUser/NavbarUser.tsx'
import Sidebar from '../Sidebar/Sidebar.tsx'
import RentData from '../RentData/RentData.tsx'
import AdminRentData from '../AdminRentData/AdminRentData.tsx'

export default function History() {
    const storedData = localStorage.getItem('userData');
    const role = JSON.parse(storedData).role;
    //get the data from locak storage
    if (storedData) {
  return (
    <div className='home'>
        <NavbarUser />
        <div className='row'>
            <div className='col-2' >
            < Sidebar storedData={storedData} />
            </div>
            <div className='col-10'>
                 {role === 'user'?<RentData/>:<AdminRentData/>}  
            </div>
        </div> 
    </div>
   )
}}
