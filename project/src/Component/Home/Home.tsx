import React from 'react'
import Navbar from '../Navbar/Navbar.tsx'
import Sidebar from '../Sidebar/Sidebar.tsx'
import CarsList from '../CarsList/CarsList.tsx'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-4' >
          < Sidebar />
        </div>
      <div className='col-8'>
        {/* <CarsList /> */}


      </div>
   </div> 


      
      </div>
  )
}
