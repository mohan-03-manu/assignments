import { useState } from "react"

export default function Loader(){
    let [loadingsatus , setloadingStatus] = useState(false)
    function loaderHandler(){
        setloadingStatus((prev)=>!prev)
    }
    return(
        <>
        <div className="w-[400px] mx-auto mt-24">
        <h1 className="text-3xl font-semibold">This is a simple button Loader app</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates aperiam labore.</p>

        <button onClick={loaderHandler}  className="mt-5 bg-orange-600 text-white px-5 py-2 rounded-lg flex items-center gap-3">
            <div>Load data</div>
            {
                loadingsatus ? <div className="loader"></div> : ""
            }
            
        </button>
        </div>
        
        </>
    )
}