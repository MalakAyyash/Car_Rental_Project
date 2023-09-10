import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { ref, push, set } from 'firebase/database';
import { database } from '../Firebase/Firebase';
import withReactContent from 'sweetalert2-react-content';


const schema = Yup.object({ // validation 
  photo: Yup.string().required("photo is required"),
  photo2: Yup.string().required("photo is required"),
  photo3: Yup.string().required("photo is required"),
  fname: Yup.string().required(" car name is required"),
  details: Yup.string().required("details is required"),
  cost: Yup.number().required("cost is required"),
});

export default function Navbar() {
  const MySwal = withReactContent(Swal);
    const formik = useFormik({ // Formik to store the data from form 
    initialValues:{ //initial value
        id: '',
        fname: '',
        cost: '',
        photo: '',
        photo2: '',
        photo3: '',
        details: '',
        available:''
    },validationSchema:schema,
    onSubmit:async  (values) => {
        console.log('Form submitted with values:', values);
        const carRef = ref(database, 'carData');
        const newCarEntry = push(carRef); // Push a new entry
        set(newCarEntry, {
          photo: values.photo,
          photo2: values.photo2,
          photo3: values.photo3,
          fname: values.fname,
          id: values.id,
          details: values.details,
          available: values.available,
          cost: values.cost,
        });
      },
})

function AddCar(){

  Swal.fire({
    title: 'Add New Car',
    html: `
    <input id="fname" type="text" class="swal2-input w-75 mb-2" name="fname" placeholder="Name" value="${formik.values.fname || ''}"/>
    <input id="cost" type="text" class="swal2-input w-75 mb-2" name="cost" placeholder="Cost Per Day" value="${formik.values.cost || ''}"  />
    <input id="photo" type="text" class="swal2-input w-75 mb-2"  name="photo" placeholder="URL image 1" value="${formik.values.photo || ''}"/>
    <input id="photo2" type="text" class="swal2-input w-75 mb-2"  name="photo2" placeholder="URL image 2" value="${formik.values.photo2 || ''}"/>
    <input id="photo3" type="text" class="swal2-input w-75 mb-2"  name="photo3" placeholder="URL image 3" value="${formik.values.photo3 || ''}"/>
    <textarea id="details" class="swal2-input w-75" placeholder="Details" name="details" value="${formik.values.details || ''}" ></textArea>
    `,
    showCancelButton: true,
    confirmButtonText: 'Add',
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      const fname = Swal.getPopup().querySelector('#fname').value;
      const cost = Swal.getPopup().querySelector('#cost').value;
      const photo = Swal.getPopup().querySelector('#photo').value;
      const photo2 = Swal.getPopup().querySelector('#photo2').value;
      const photo3 = Swal.getPopup().querySelector('#photo3').value;

      const details = Swal.getPopup().querySelector('#details').value;

   

      try {
        formik.setValues({
          ...formik.values,
          fname,
          cost,
          photo,
          photo2,
          photo3,
          details,
        });
      const carDataRef = ref(database, 'carData');
        const newCarEntry = push(carDataRef);
        set(newCarEntry, {
          photo,
          photo2,
          photo3,
          fname,
          cost,
          details,
        });
      Swal.fire({
          title: 'ADDED!',
          text: 'Car Added successfully',
          icon: 'success'
      });
      formik.resetForm();

      } catch (error) {
          Swal.showValidationMessage(`add failed: ${error}`);
      }}
})
}

  return (
    <div>
        <nav className="navbar bg-dark  border">
        <div className="container">
        <a className="navbar-brand" href="#">
        <h4 className=" logoTitle text-light">Car Rental</h4>
        </a>
        <button className='ms-auto rounded' onClick={ AddCar}><i className="fa-solid fa-plus"></i></button>
        </div>
        </nav>

    </div>
  )
  }