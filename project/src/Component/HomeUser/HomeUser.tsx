import React from 'react';
import NavbarUser from '../NavbarUser/NavbarUser.tsx';
import Sidebar from '../Sidebar/Sidebar.tsx';
import CarsList from '../CarsList/CarsList.tsx';
import LoginPage from '../LoginPage/LoginPage.tsx';
import CarData from '../CarData/CarData.tsx';
import { database } from '../Firebase/Firebase';
import { ref, update, get } from 'firebase/database';
import { useState, useEffect } from 'react';

export default function HomeUser() {
const storedData = localStorage.getItem('userData');
// Rent data
const [rentData, setRentData] = useState({});
// Get carData
const carData = CarData();
useEffect(() => {
  const carRentRef = ref(database, 'carRent');
  get(carRentRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const carRentObject = snapshot.val();
        setRentData(carRentObject);
      } else {
        console.log('No data available.');
      }
    })
    .catch((error) => {
      console.error('Error getting data:', error);
    });
}, []);
// Compare and log cars with expired rent
useEffect(() => {
Object.keys(carData).forEach((carKey) => {
  const carId = carData[carKey].id;
  Object.keys(rentData).forEach((rentKey) => {
  const rentId = rentData[rentKey].id;
  if(carId === rentId){
    const carToDateString = rentData[rentKey]?.to || '';
    const rentDate = new Date(carToDateString)
    const currentDate = new Date()
    const carRef = ref(database, `carData/${carKey}`);
    const updatedValue = {
      available: true,
    };
    if (currentDate > rentDate){
      update(carRef, updatedValue)
    }
  }
});
});
}, [carData, rentData]);
  if (storedData) {
    return (
      <div className='home'>
        <NavbarUser />
        <div className='row'>
          <div className='col-2'>
            <Sidebar storedData={storedData} />
          </div>
          <div className='col-10'>
            <CarsList />
          </div>
        </div>
      </div>
    );
  }
  // Handle the case when there's no stored data
  return (
    <div>
      <LoginPage />
    </div>
  );
}
