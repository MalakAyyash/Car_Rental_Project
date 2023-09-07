import React, { useEffect, useState } from 'react';
import { database } from '../Firebase/Firebase';
import { get, ref } from 'firebase/database';
import './CarList.css';


export default function CarsList() {
  const [carData, setCarData] = useState({}); // State to store car data

  useEffect(() => {
    const carDataRef = ref(database, 'carData');

    get(carDataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const carDataObject = snapshot.val();
          setCarData(carDataObject);
        } else {
          console.log('No data available.');
        }
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
  }, []);

  return (
    <div className='row mt-5'>
      {Object.keys(carData).map((carKey) => (
        <div className='col-md-4' key={carKey}>
          <div className='card shadow mb-3 rounded-0 carCard'>
            <img src={carData[carKey].photo} className='w-100' alt='car' />
            <h2>{carData[carKey].fname}</h2>
            <h3 className='badge rounded-0'>{carData[carKey].cost}$</h3>
            <hr></hr>
            <p className='p-3'>{carData[carKey].details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
