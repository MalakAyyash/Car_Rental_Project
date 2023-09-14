import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCDVRwHK-2GfPUmMHSm4OuYiyBdpqzoXPI",
  authDomain: "reactcarrental.firebaseapp.com",
  databaseURL: "https://reactcarrental-default-rtdb.firebaseio.com",
  projectId: "reactcarrental",
  storageBucket: "reactcarrental.appspot.com",
  messagingSenderId: "58208718523",
  appId: "1:58208718523:web:5abd7cf5ef0fe01e38639e",
  measurementId: "G-EZQ70QE47M"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const storage = getStorage(firebase); // Use getStorage to initialize Firebase Storage


export { storage, database, firebase };
