import React ,{useState} from 'react';
import './CarList.css';
import { Link } from 'react-router-dom';
import CarData from '../CarData/CarData.tsx';

export default function CarsList() {

  const carData = CarData(); // get the data of the car from CarData.tsx 
  const storedData = localStorage.getItem('userData');
  const role = JSON.parse(storedData).role;
  // Initialize the path based on the role
  const initialPath = role === 'admin' ? '/car-details/' : '/user/car-details/';
  const [path, setPath] = useState(initialPath); 
  // const available = carData[carKey].available

   return (
    <div className='row mt-5 '>
      {Object.keys(carData).map((carKey) => (
        carData[carKey].available?(
        <div className='col-md-4 ' key={carKey}  >
          <div className='card shadow mb-3 rounded-0 carCard '>
          <Link to={`${path}${carKey}`}>
            <button className='detalis rounded'>Details</button>
            </Link>
            <img src={carData[carKey].photo} className='w-100'alt='car' />
            <h2>{carData[carKey].fname}</h2>
            <h3 className='badge rounded-0'>{carData[carKey].cost}$</h3>
            <hr></hr>
            <p className='p-3'>{carData[carKey].details}</p>
          </div>
        </div>):null
      ))}
    </div>
  );
}