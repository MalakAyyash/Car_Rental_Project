
import { useFormik } from 'formik';
import React from 'react'
import withReactContent from 'sweetalert2-react-content'; 
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { ref, push, set, update } from 'firebase/database';
import { database } from '../Firebase/Firebase';

const schema = Yup.object({ // validation 
    from: Yup.string().required("from is required"),
    to: Yup.string().required("to is required"),
    cost: Yup.string().required("cost is required"),
  });
  const MySwal = withReactContent(Swal);

export default function RentBtn({carData,carKey,setRentClicked}) {

  var myData = localStorage.getItem('userData');
  var userData = JSON.parse(myData);
  const email = userData.Email;
  const id = carData[carKey].id
  const fname = carData[carKey].fname
  setRentClicked(false)
  const formik = useFormik({ // Formik to store the data from form 
  initialValues:{ //initial value
      from:'',
      to:'',
      cost: '',
      id:'',
      email:'',
      fname:'',
      available:'',
  },validationSchema:schema,
  onSubmit:async  (values) => {
      console.log('Form submitted with values:', values);
      const carRentRef = ref(database, 'carRent');
      const newCarRent = push(carRentRef); // Push a new entry
      set(newCarRent, {
          from: values.from,
          to: values.to,
          cost: values.cost,
          id: values.id,
          email: email,
          fname: values.fname,
      });
    },
})
    const customButtonClicked = () => {
      const start= new Date(from.value);
      const end = new Date(to.value);
      if (isNaN(start) || isNaN(end)) {
        formik.setFieldValue('cost', '');
        return;
      }
      const difference = Math.abs(end - start);
      const differenceInDays = Math.ceil(difference / (1000 * 60 * 60 * 24))*carData[carKey].cost;
      document.querySelector('#cost').value =  differenceInDays.toString() + "$";
    };
    MySwal.fire({
      title: 'Rent a Car',
      html: (
        <div>
          { /* Set min to today's date */ }
          <input id="from" type="date" className="swal2-input w-75 mb-2" name="from" placeholder="from"  onChange={formik.handleChange}   min={new Date().toISOString().split("T")[0]} />
          <input id="to" type="date" className="swal2-input w-75 mb-2" name="to" placeholder="to"onChange={formik.handleChange} min={new Date().toISOString().split("T")[0]}  />
          <label  className="swal2-input w-75 mt-3"  name="cost" >Total Cost </label>
          <input id="cost" type="text" className="swal2-input w-75 mb-2 mt-0" name="cost"  readOnly />
          <button
            className=""
            onClick={() => customButtonClicked()}
          >
            Total Cost
          </button>
      </div>
      ),
      showCancelButton: true,
      confirmButtonText: 'Rent',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const from = Swal.getPopup().querySelector('#from').value;
        const to = Swal.getPopup().querySelector('#to').value;
        const cost = Swal.getPopup().querySelector('#cost').value;
      //  validate the fields
      if (!from && !to ) {
        Swal.showValidationMessage('Date is required');
        return false; 
      }

  try {
    formik.setValues({
        ...formik.values,
        from,
        to,
        cost,
        id,
        email,
        fname,
    });
    const carDataRef = ref(database, 'carRent');
    const newCarRent = push(carDataRef);
    set(newCarRent, {
        from,
        to,
        cost,
        id,
        email,
        fname,
    });
    Swal.fire({
        title: 'Rented!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result['isConfirmed']){
            window.location.reload();
        }
      })
      const carRef = ref(database, `carData/${carKey}`);
      const updatedValue = {
        available: false,
      };
      update(carRef, updatedValue)
      formik.resetForm();
  } catch (error) {
      Swal.showValidationMessage(`Rent failed: ${error}`);
  }}
})
  return (
    <div className="container mt-5">
    </div>
  );
  }