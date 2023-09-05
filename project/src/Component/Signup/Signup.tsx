import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { ref, push, set } from 'firebase/database';
import { database } from '../Firebase/Firebase';

const schema = Yup.object({ // validation 
  fname: Yup.string().required("name is required"),
  email: Yup.string().required("email is required").email('not valid email'),
  password: Yup.string().required("password is required").min(6,"min is 6 char"),
  confirm: Yup.string().required("confirm password is required").oneOf([Yup.ref('password')],'not match password')

});

export default function Signup() {
    const formik = useFormik({ // Formik to store the data from form 
        initialValues:{ //initial value
            photo: '',
            fname: '',
            email: '',
            password: '',
            confirm: ''
        },validationSchema:schema,
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            const signupRef = ref(database, 'signupData');
            const newSignupEntry = push(signupRef); // Push a new entry
            set(newSignupEntry, {
              photo: values.photo,
              fname: values.fname,
              Email: values.email,
              Password: values.password,
            });
          },
    })
  return ( //html form
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
                   <div className="form-outline mb-4"> {/* img url */}

                     <label className="form-label" htmlFor="photo">Personal img</label>
                       <input type="file" id="photo" className="form-control" value={formik.values.photo} onChange={formik.handleChange} />
                     </div>
                   <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="fname">Name</label>
                       <input type="text" id="fname" className="form-control" value={formik.values.fname} onChange={formik.handleChange}/>
                       {/* error massage */}
                       <p className='text-danger'>{formik.errors.fname}</p>
                     </div>
                     <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="email">Email</label>
                       <input type="email" id="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} />
                       <p className='text-danger'>{formik.errors.email}</p> 
                     </div>
                     <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="password">Password</label>
                       <input type="password" id="password" className="form-control" value={formik.values.password} onChange={formik.handleChange} />
                       <p className='text-danger'>{formik.errors.password}</p>
                     </div>
                     <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="confirm">Confirm Password</label>
                       <input type="password" id="confirm" className="form-control" value={formik.values.confirm} onChange={formik.handleChange}/>
                       <p className='text-danger'>{formik.errors.confirm}</p>

                     </div>
                     <div className="text-center pt-1  pb-1">
                       <button className="btn rounded-0 btn-block fa-lg me-2 text-light bg-secondary" type="submit" >Sign up</button>
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
