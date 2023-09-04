import { useFormik } from 'formik'
import React from 'react'

export default function Signup() {
    const user ={
        name: '',
        email: '',
        password: 0
    }

    const formik = useFormik({
        initialValues:{
            name: '',
            Email: '',
            Password: '',
            Confirm: ''
        },
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
          },
        
    })


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
                   <form onSubmit={formik.handleSubmit}>
                   <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="name">Name</label>
                       <input type="text" id="name" className="form-control" value={formik.values.name} onChange={formik.handleChange}/>
                     </div>
                     <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="Email">Email</label>
                       <input type="email" id="Email" className="form-control" value={formik.values.Email} onChange={formik.handleChange} />
                     </div>
                     <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="Password">Password</label>
                       <input type="password" id="Password" className="form-control" value={formik.values.Password} onChange={formik.handleChange} />
                     </div>
                     <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="Confirm">Confirm Password</label>
                       <input type="password" id="Confirm" className="form-control" value={formik.values.Confirm} onChange={formik.handleChange}/>
                     </div>
                     <div className="text-center pt-1  pb-1">
                       <button className="btn rounded-0 btn-block fa-lg   me-2 text-light bg-secondary" type="submit" >Sign up</button>
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
