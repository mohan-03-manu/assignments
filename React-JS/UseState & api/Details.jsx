import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function Details() {
  let [product , setProduct] = useState({})
  let {id} = useParams()
  useEffect (()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
    setProduct(product.data)
    })
  })
  return (
    <>
    <div className=" mt-24  w-[800px] mx-auto border p-4 rounded-md bg-white shadow-sm hover:shadow-lg hover:translate-y-1 transition-all duration-300 ">
      <div className="flex gap-5 items-center ">
        <img className="h-48 w-72 object-contain" src={product.image} alt="" />
        <div className="">
          <h1 className="text-lg font-semibold">{product.title}</h1>
          <h1 className="text-sm my-2  text-neutral-600">{product.description}</h1>
          <p className="font-semibold text-lg my-2">₹{Math.floor( product.price * 92)}</p>
            <div className="flex gap-5">
              <button className="bg-orange-500 hover:bg-orange-600 text-white border border-orange-600 font-semibold hover:shadow-lg px-6 py-3 rounded-lg transition-all duration-300">Buy now</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white border border-orange-500 font-semibold hover:shadow-lg px-6 py-3 rounded-lg transition-all duration-300">Add to Cart 🛒</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}