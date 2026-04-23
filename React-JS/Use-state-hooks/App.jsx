import { useState } from "react";
import Counter from "./components/Counter";
import Alert from "./components/Alert";
import Loader from "./components/Loader";
import User from "./components/User";
 function App() {
  let [age ,setAge] = useState(20);
  return (
   <>
   {/* <h1 className="text-center mt-32 font-bold text-4xl">my age is {age}</h1>
   <div className="text-center">
    <button onClick={()=>
      setAge (30)
    } className=" mt-5 px-5 py-2 bg-blue-700 text-white rounded-xl">udpade my age</button>
   </div> */}
   {/* < Counter /> */}
   {/* <Alert  /> */}
   {/* <Loader /> */}
   <User />
   </>
  )
}
export default App;