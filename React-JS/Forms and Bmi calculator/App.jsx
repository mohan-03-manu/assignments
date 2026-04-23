import { useState } from "react"
import { useForm } from "react-hook-form";


function App() {
  let[bmi , calculateBmi] = useState();
  let {handleSubmit , reset , register}= useForm("");
  function submitHandler(data){
    let height = parseFloat(data.height);
    let weight = parseFloat(data.weight);
    calculateBmi(Math.floor(weight/(height*height)));
    reset();
  }
 
  return (
    <>
  <div className="flex mt-20 justify-center items-center min-h-screen  ">

    <div className="flex border border-neutral-500 rounded-xl shadow-lg overflow-hidden">

      <form action="" onSubmit={handleSubmit(submitHandler)}>
       <div className="w-[360px]  bg-white p-4 ">
       <h1 className="p-4 font-bold text-xl text-center">BMI Calculator🏃🏼‍➡️</h1>

       <div className="flex items-center gap-3 m-3 ">
       <p>Height(M):</p>
       <input type="number" step="any" {...register("height")}  className="border outline-none p-3 rounded-lg w-full  " placeholder="Height in M" />
       </div>

       <div className="flex items-center gap-3  m-3">
       <p>Weight(kg):</p>
       <input type="number"  step="any"   {...register("weight")}  className="border outline-none p-3 rounded-lg w-full " placeholder="Weight in KG" />
       </div>

        <input type="Submit" className=" bg-black text-white w-full rounded-full px-4 py-2 mt-4 hover:bg-gray-800 transition  " value="Calculate BMI" />
        <h1 className="font-semibold text-green-900 text-xl mt-4 text-center">Your BMI is {bmi} </h1>
        </div>

      </form>

      <img  className="w-[230px] h-[400px] object-fill rounded-r-xl" src="https://i.pinimg.com/1200x/8f/43/92/8f4392aab51ad26f6f5c20bebe0751c0.jpg" alt="" />





    </div>

  </div>
     
    </>
  )
}

export default App
