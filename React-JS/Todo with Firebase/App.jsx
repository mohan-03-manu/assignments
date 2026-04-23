import axios from 'axios';
import React, { useRef, useState,useEffect } from 'react'
import Card from './Components/TodoCard';
import Loader from './Components/Loader';
const firebaseUrl = 'https://frontend-projects-bf330-default-rtdb.asia-southeast1.firebasedatabase.app/';
function App () {
  let taskInput = useRef(null);
  let [todos, setTodos] = useState([])
  let [formStatus, setFormStatus] = useState(false)

  function handleSubmit(){
    setFormStatus(true)
    let task = taskInput.current.value;
    axios.post(`${firebaseUrl}todos.json`, {
      title: task
    }).then(()=>{
      setFormStatus(false);
      fetchTodos();
    })
  }
   
  function fetchTodos(){
    axios.get(`${firebaseUrl}todos.json`).then(todos=>{
      let tempTodos = [];
      for(let key in todos.data){
        let todo = {
          id: key,
          ...todos.data[key]
        }
        tempTodos.push(todo)
      }
      setTodos(tempTodos)
    })
  }
   
   function handleDelete(id){
    axios.delete(`${firebaseUrl}todos/${id}.json`).then(()=>{
      fetchTodos();
    })
   }
   useEffect(()=>{
      fetchTodos()
     }, [])


  return (
  <>
     <div className="w-[420px] bg-white backdrop-blur-lg border border-gray-200 p-7 rounded-3xl shadow-xl mx-auto mt-14 ">
      <h1 className="font-bold text-3xl text-gray-800">Manage your tasks <span className='text-blue-500'>@User</span></h1>
      <p className=' text-gray-500 mt-2 text-sm '>Stay organized and track your daily tasks easily.</p>
      <input ref={taskInput} className='border border-gray-300 w-full rounded-xl  mt-4 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200' type="text" placeholder='Enter new task..... ' />
        <div className="flex gap-5 mt-3">
          <button onClick={handleSubmit} className='bg-blue-500 text-white px-5 py-2.5 rounded-xl hover:bg-blue-600 flex align-center gap-3 ' >Create task{!formStatus ? "" : <Loader />}</button>
          {/* <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ' >Delete</button> */}
        </div>
           <div className="mt-8 space-y-3">
            {todos.length === 0 && (
              <p className='text-gray-400 text-center mt-6'>No tasks yet 🚀</p>
            )}

            {todos.map(todo=><Card handleDelete={handleDelete} id={todo.id} title={todo.title} key={todo.id} />)}
           </div>
      </div>
  </>
  )
}

export default App
