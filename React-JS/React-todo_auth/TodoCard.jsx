import React, { useState } from 'react'
import { CiTrash } from "react-icons/ci";
import Loader from './Loader';
function TodoCard({title,handleDelete,id}) {
  let [deleteStatus , setDeleteStatus] = useState(false);

  function handleDeleteClick(){
    setDeleteStatus(true);
    handleDelete(id)
  }
  return (
    <div className='border border-gray-200 mt-3 rounded-xl  p-4 items-center flex justify-between  hover:bg-gray-50 transition'>
        <h2 className='text-gray-700 font-medium'>{title}</h2>
        <button onClick={handleDeleteClick} className='text-xl text-gray-400 hover:text-red-500 transition'>{deleteStatus ? <Loader /> : <CiTrash />}</button>
    </div>
  )
}

export default TodoCard
