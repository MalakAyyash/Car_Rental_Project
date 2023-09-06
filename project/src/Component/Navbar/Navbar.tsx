import React from 'react'
import swal from 'sweetalert';

export default function Navbar() {

  function AddCar(){

    swal({
      title: 'Add New Car',
      content: {
        element: "div",
        attributes: {
          innerHTML: `
            <input id="Name" type="text" class="swal2-input w-75 mb-2" placeholder="Name">
            <input id="Cost" type="text" class="swal2-input w-75 mb-2" placeholder="Cost Per Day">
            <input id="URL" type="text" class="swal2-input w-75 mb-2" placeholder="URL image">
            <textarea id="Details" class="swal2-input w-75" placeholder="Details"></textarea>
          `,
        },
      },
      buttons: {
        cancel: "Cancel",
        confirm: {
          text: "Add",
          value: true,
          visible: true,
          className: "bg-secondary",
        },
      },
        // preConfirm: async () => {
        // const updatedTitle = Swal.getPopup().querySelector('#updateTitle').value;//get the value that are inside the alert
        // const updatedDate = Swal.getPopup().querySelector('#updateDate').value;
        // const updatedDescription = Swal.getPopup().querySelector('#updateDescription').value;
        // try {
        // const db = firebase.database();
        // console.log(currentData.key)
        // firebase.database().ref(`objectForm/${currentData.key}`).once('value',(snapshot => {//access the firebase at a spesific position from the key
        //     const existingData = snapshot.val();
        //     existingData.title = updatedTitle;//storr the edited data at firebase 
        //     existingData.date = updatedDate;
        //     existingData.description = updatedDescription;
        //     firebase.database().ref(`objectForm/${currentData.key}`).set(existingData);
        //     }));
      }).then((result) => {
        if (result ==null ){
        }
        else  {
          swal({
            title: 'ADDED!',
            text: 'Car Added successfully!',
            icon: 'success',
          });
        }
      });
    }
  return (
    <div>
        <nav className="navbar bg-secondary  ">
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
