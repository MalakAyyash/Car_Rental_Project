import React from 'react'
import './Carousel.css';


export default function Carousel({ carKey, carData }) {
    
  return (
<div id="demo" className="carousel slide w-100 m-auto" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={carData[carKey].photo} className='carImg w-100 'alt='car' />
    </div>
    <div className="carousel-item">
    <img src={carData[carKey].photo2} className=' carImg w-100'alt='car' />
    </div>
    <div className="carousel-item">
    <img src={carData[carKey].photo3} className='carImg w-100'alt='car' />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
</div>

  )
}
