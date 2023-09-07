import React, { useContext, useState, useEffect } from 'react'
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { ref, push, set, get } from 'firebase/database';
import { database } from '../Firebase/Firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



export default function LoginPage() {

  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

    const formik = useFormik({ // Formik to store the data from form 
        initialValues:{ //initial value
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
              try {
        const userRef = ref(database, 'signupData'); 
        const snapshot = await get(userRef); //get the data from database 

        if (snapshot.exists()) {
          
          const userData = snapshot.val();//get all data
          // Find the user by email
          const userKey = Object.keys(userData).find(
            (key) => userData[key].Email === values.email
          );
          if (userKey && userData[userKey].Password === values.password) {
            console.log('Login success');
            localStorage.setItem('userData',JSON.stringify(userData[userKey]))
            setLogin(true)
            
          } else {
            setError("Invalid email or password. Please try again.");
          }
        } else {
          setError('Invalid email or password. Please try again.');
        }
      } catch (error) {
        console.error('Login failed:', error);
        setError('Login failed. Please try again.');
      }
    },
  });

  return (
    <div>
 <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <img src="/Images/logo.jpg" className='border border-balck w-25 logo' alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1 logoTitle">Car Rental</h4>
                </div>
                <form  onSubmit={formik.handleSubmit}>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" value={formik.values.password} onChange={formik.handleChange} />
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className='btn rounded-0 btn-block fa-lg  mb-3 me-2 text-light bg-secondary' type="submit">
                      {login ?<Link className=" text-light text-decoration-none" to="Home">Login</Link>:
                      <button  className=" text-light text-decoration-none btn" >Login</button>}

                      </button>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                      )}
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link  className="btn btn-outline-secondary rounded-0" to="Signup">Create new</Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6  coverImg">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
