import { useEffect, useState } from 'react';
import { database } from '../Firebase/Firebase';
import { get, ref } from 'firebase/database';

export default function CarData() {
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

    return carData;
}