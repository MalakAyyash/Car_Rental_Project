import { ref, set } from 'firebase/database';
import React from 'react'
import Swal from 'sweetalert2';
import { database } from '../Firebase/Firebase';

export default function DeleteBtn({carKey,carData }) {

    const carRef = ref(database, `carData/${carKey}`);
    // Delete the car from Firebase
    set(carRef, null)
      .then(() => {
        //update the localStorage
        const updatedCarData = { ...carData };
        delete updatedCarData[carKey]; // Remove the carKey from the local carData copy
        localStorage.setItem('userData', JSON.stringify(updatedCarData));
      })
      .catch((error) => {
        console.error("Error deleting car from Firebase:", error);
      });
      Swal.fire({
        title: 'Deleted!',
        icon: 'success',
        confirmButtonText: 'Back to Home'
      }).then((result) => {
        if (result['isConfirmed']){
          window.location.href = '/Home'; // Redirect to the home page
        }
      })
      
  return (
    <>
    </>
  )
}