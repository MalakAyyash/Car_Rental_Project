import Navbar from '../Navbar/Navbar.tsx'
import Sidebar from '../Sidebar/Sidebar.tsx'
import CarsList from '../CarsList/CarsList.tsx'
import LoginPage from '../LoginPage/LoginPage.tsx';
import './Home.css';


export default function Home() {

  const storedData = localStorage.getItem('userData');
  //get the data from locak storage
  if (storedData) {
  return (
          <div className='home'>
      <Navbar />
      <div className='row'>
        <div className='col-2' >
          < Sidebar storedData={storedData} />
        </div>
      <div className='col-10'>
    
              <CarsList />

      </div>
   </div> 

      </div>
  )
  }

    // Handle the case when there's no stored data
    return (
      <div>
        <LoginPage />
      </div>
    );
  }

 

