import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id ,img, title, desc , price}) {
  return (
    <Link to={`/details/${id}`}>
     <div className='w-[250px] border p-2 bg-white rounded-md shadow-md hover:cursor-pointer'>
      <div className="text-center">
        <img src={img} className='h-28 inline'  alt="" /> 
      </div>    
      <h1 className='truncate font-medium'>{title}</h1>
      <p className='font-semibold'>₹{Math.floor(price * 92)}</p>
      {/* <p>{desc}</p> */}
     </div>
    </Link>
  )
}

export default Card

