import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Img from './Pages/Img'
import Logo from'./assets/logo.svg'

function App() {
  return (
    <>
     <div className="border-b border-neutral-200 p-2 sticky top-0 bg-slate-50 ">
       <div className="max-w-5xl mx-auto flex  justify-between items-center">
         <Link to="/"><img src={Logo} className='h-8 hover:text-indigo-600 transition-colors' alt="" /></Link>
           <div className=" flex gap-4">
             <Link to="/image" className='hover:text-indigo-600 transition-colors'>Generate Images</Link>
             <Link  className='hover:text-indigo-600 transition-colors'>About Us</Link>
           </div>
       </div>
     </div>


      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/image' element={<Img />} />
       <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
