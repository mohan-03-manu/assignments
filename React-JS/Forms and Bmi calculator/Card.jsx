import React from 'react'

function Card({name , img , email}) {
  return (
    <div className='border bg-neutral-100  w-40 rounded-xl p-3 text-center '>
        <img className='w-16 h-16 rounded-full inline object-cover' src={img} alt="" />
        <h1 className='mt-2'>{name}</h1>
        <p className='text-neutral-800 text-sm text-ellipsis overflow-hidden'>{email}</p>
        <p className='text-xs text-neutral-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
    </div>
  )
}

export default Card
