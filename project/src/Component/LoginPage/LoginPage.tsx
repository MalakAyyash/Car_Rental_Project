import React from 'react'
import './LoginPage.css';
import { Link } from 'react-router-dom';


export default function LoginPage() {
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
                <form>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example11">Username</label>
                    <input type="email" id="form2Example11" className="form-control" placeholder="" />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                    <input type="password" id="form2Example22" className="form-control" />
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <Link className="btn rounded-0 btn-block fa-lg  mb-3 me-2 text-light bg-secondary" to="/">Login</Link>
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
