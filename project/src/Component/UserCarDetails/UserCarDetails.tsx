import React, {useState } from 'react';
import NavbarUser from '../NavbarUser/NavbarUser.tsx';
import Sidebar from '../Sidebar/Sidebar.tsx';
import { useParams } from 'react-router-dom';
import CarData from '../CarData/CarData.tsx';
import Carousel from '../Carousel/Carousel.tsx';
import RentBtn from '../RentBtn/RentBtn.tsx';
import styled from 'styled-components';//use style component 

export default function UserCarDetails() {

const carData = CarData(); // get the data of the car from CarData.tsx 
const { carKey } = useParams(); //use params "react hook"
const [rentClicked , setRentClicked] = useState(false);
const storedData = localStorage.getItem('userData');
//style component
const H2 = styled.h2` 
font-size: 35px;
`;
const H3 = styled.h3` 
font-size: 26px;
`;
// ============================== rent btn ===============================
function Rent(carKey:any,carData:any) {
  setRentClicked(true)
}
// =============================================================================
if (storedData) {
    // Check if carKey exists in carData before rendering
    if (carData.hasOwnProperty(carKey)) {
      const selectedCar = carData[carKey];
      return (
        <div className='home'>
          <NavbarUser />
          <div className='row'>
            <div className='col-2'>
              <Sidebar storedData={storedData} />
            </div>
            <div className='col-10 row'>
                <div className="col-md-6">
                    <Carousel carKey={carKey} carData={carData} />
                </div>
                <div className="col-md-6 carInformation">
                <H2 className="text-light logoTitle">{selectedCar.fname}</H2>
                    <H3 className="text-success badge bg-light ms-2">{selectedCar.cost}$</H3>
                    <p className='text-light bg-dark p-5 m-2'>{selectedCar.details}</p>
                    <button className='ms-3 my-3 rounded w-100 ' onClick = {() => Rent(carKey,carData)}>Rent</button>
                    {rentClicked?<RentBtn carKey={carKey} carData={carData}  setRentClicked={setRentClicked}/>:null} 
                </div>
            </div>
          </div>
        </div>
      );
    } 
  }
}