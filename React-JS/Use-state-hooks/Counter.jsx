import { useState } from "react"
 export default function Counter(){
    let [counter, setCounter ] = useState(0)
    function incrementHandler(){
        setCounter((data)=>data + 1)
    }
    function decrementHandler(){
        setCounter((data)=>data - 1)
    }
    return(
        <>
        <div className="w-[400px] mx-auto mt-24">
        <h1 className="text-3xl font-semibold">This is a simple counter App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque quidem eveniet?</p>
        <h1 className="text-2xl font-bold">{counter}</h1>
        <div className="flex gap-3 mt-2">
            <button onClick={incrementHandler}  className="px-4 py-2 text-white bg-orange-600 rounded-lg">Increment</button>
            <button onClick={decrementHandler}  className="px-4 py-2 text-white bg-orange-600 rounded-lg">Decrement</button>
        </div>
        </div>

        </>
    )
}
