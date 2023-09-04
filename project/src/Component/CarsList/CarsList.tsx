import React from 'react'

export default function CarsList() {

    const jsonData = {
        id : 1,
        name : 'bmw',
        price : 50,
        description : "njnjk",
        model: 1999,
        avalable : true
    }

  return (
    <>

    <div className='row mt-5'>
        <div className="col-4">
            <div className="card border border-2 border-black mb-3 rounded-0">
                <img src='' alt=' car' />
                <h2 className="${cssClass}">title</h2>
                <p className="d-flex justify-content-center">description</p>
            </div>
        </div>
    </div>



    </>
  )
}
