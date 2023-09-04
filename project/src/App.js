import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
  <>
   {/* < Navbar />
   <div className='row'>
    <div className='col-2' >
   < Sidebar />
   </div>
   <div className='col-10'>
   < CarsList />
   </div>
   </div> */}

   {/* <Signup /> */}
   {/* <Login /> */}

   </>
  );
}

export default App;
