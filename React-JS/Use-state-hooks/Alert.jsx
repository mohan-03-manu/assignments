import { useState } from "react"

export default function Alert(){
    let [alertStatus, setAlertStatus] = useState(false)
    function alerthandler(){
        setAlertStatus((prev)=>!prev)
    }
    return(
        <>
        {
            alertStatus ? <div className="border absolute top-10 right-10 px-6 py-2 rounded-lg bg-neutral-100">This is an react alert</div>  : ""
        }
        <div className="w-[400px] mx-auto mt-24">
        <h1 className="text-3xl font-semibold">This is a simple react js alert app</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates aperiam labore.</p>

        <button onClick={alerthandler} className="mt-5 bg-orange-600 text-white px-5 py-2 rounded-lg">Show alert</button>
        </div>
        
        </>
    )
}