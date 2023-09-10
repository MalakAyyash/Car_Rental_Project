import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.tsx';
import Sidebar from '../Sidebar/Sidebar.tsx';
import { useParams } from 'react-router-dom';
import CarData from '../CarData/CarData.tsx';
import Carousel from '../Carousel/Carousel.tsx';
import './CarDetail.css';




export default function CarDetails() {

const carData = CarData(); // get the data of the car from CarData.tsx 
const { carKey } = useParams(); //use params "react hook"

  const storedData = localStorage.getItem('userData');
  if (storedData) {
    // Check if carKey exists in carData before rendering
    if (carData.hasOwnProperty(carKey)) {
      const selectedCar = carData[carKey];
      return (
        <div className='home'>
          <Navbar />
          <div className='row'>
            <div className='col-2'>
              <Sidebar storedData={storedData} />
            </div>
            <div className='col-10 row'>

                <div className="col-md-6">
                    <Carousel carKey={carKey} carData={carData} />
                </div>
                <div className="col-md-6 carInformation">
                    <h2 className='text-light logoTitle '>{selectedCar.fname}</h2>
                    <h3 className=' text-success badge bg-light ms-2'>{selectedCar.cost} $</h3>
                    <p className='text-light bg-dark p-5 m-2'>{selectedCar.details}</p>
                    <button className='ms-3 my-3 rounded w-25 '>Delete</button>
                    <button className='ms-3 my-3 rounded w-25'>Edit</button>

                    
                </div>

                
             



            </div>
          </div>
        </div>
      );
    } 
  }
}
