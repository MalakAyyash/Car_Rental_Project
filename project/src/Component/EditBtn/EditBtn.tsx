import { push, ref, set, onValue } from 'firebase/database';
import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { database } from '../Firebase/Firebase';

const schema = Yup.object({ // validation 
    photo: Yup.string().required("photo is required"),
    photo2: Yup.string().required("photo is required"),
    photo3: Yup.string().required("photo is required"),
    fname: Yup.string().required(" car name is required"),
    details: Yup.string().required("details is required"),
    cost: Yup.number().required("cost is required"),
  });
  
export default function EditBtn({carKey,carData , setEditClicked}) {
    setEditClicked(false)
    //put the value inside the input fields
    const initialValues = {
        fname: carData[carKey].fname || '',
        cost: carData[carKey].cost || '',
        photo: carData[carKey].photo || '',
        photo2: carData[carKey].photo2 || '',
        photo3: carData[carKey].photo3 || '',
        details: carData[carKey].details || '',
      };
    const formik = useFormik({
        initialValues,validationSchema:schema,
    onSubmit:async  (values) => {
    const carRef = ref(database, `carData`);
    const newCarEntry = push(carRef); // Push a new entry
    set(newCarEntry, {
      photo: values.photo,
      photo2: values.photo2,
      photo3: values.photo3,
      fname: carData[carKey].fname,
      details: values.details,
      cost: values.cost,
    });
  },
})
  Swal.fire({
    title: 'Edit the Car',
    html: `
      <input id="fname" type="text" class="swal2-input w-75 mb-2" name="fname" placeholder="Name" value="${formik.values.fname || ''}"/>
      <input id="cost" type="text" class="swal2-input w-75 mb-2 " name="cost" placeholder="Cost Per Day" value="${formik.values.cost || ''}"  />
      <input id="photo" type="text" class="swal2-input w-75 mb-2 "  name="photo" placeholder="URL image 1" value="${formik.values.photo || ''}"/>
      <input id="photo2" type="text" class="swal2-input w-75 mb-2 "  name="photo2" placeholder="URL image 2" value="${formik.values.photo2 || ''}"/>
      <input id="photo3" type="text" class="swal2-input w-75 mb-2"  name="photo3" placeholder="URL image 3" value="${formik.values.photo3 || ''}"/>
      <textarea id="details" class="swal2-input w-75  " placeholder="Details" name="details" style="color: inherit;">${formik.values.details || ''}</textarea>
    `,
    showCancelButton: true,
    confirmButtonText: 'edit',
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      const fname = Swal.getPopup().querySelector('#fname').value;
      const cost = Swal.getPopup().querySelector('#cost').value;
      const photo = Swal.getPopup().querySelector('#photo').value;
      const photo2 = Swal.getPopup().querySelector('#photo2').value;
      const photo3 = Swal.getPopup().querySelector('#photo3').value;
      const details = Swal.getPopup().querySelector('#details').value;
      //  validate the fields
      if (!fname ) {
        Swal.showValidationMessage('Car name is required');
        return false; 
      }
      else if (!cost ){
        Swal.showValidationMessage('cost is required');
        return false; 
      }
      if (isNaN(cost)) {
        Swal.showValidationMessage('Cost must be a number');
        return false;
      }
      else if (!photo ){
        Swal.showValidationMessage('image is required');
        return false; 
      } else if (!photo2 ){
        Swal.showValidationMessage('second image is required');
        return false;
      } else if (!photo3 ){
        Swal.showValidationMessage('third image is required');
        return false;
      } else if (!details ){
        Swal.showValidationMessage('details is required');
        return false;
      }
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
        const carRef = ref(database, `carData/${carKey}`);
        onValue(carRef, (snapshot) => {
          const existingData = snapshot.val();
          existingData.photo = photo;
          existingData.photo2 = photo2;
          existingData.photo3 = photo3;
          existingData.fname = fname;
          existingData.cost = cost;
          existingData.details = details;
          const objectFormRef = ref(database, `carData/${carKey}`);
          set(objectFormRef, existingData).then(() => {
            Swal.fire({
                title: 'Car Informations Edited!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result['isConfirmed']){
                    window.location.reload();
                }
              })
            formik.resetForm();
          });
        });
      } catch (error) {
        Swal.showValidationMessage(`Edit failed: ${error}`);
      }
    },
  });
  return (
  <>
  </>
  )
}