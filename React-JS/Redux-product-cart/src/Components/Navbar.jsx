import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";
function Navbar() {
    const {items} = useSelector((state)=> state.cart)
    const itemsCount = items.length;
  return (
    <>
      <div className="border-b py-4 px-28 flex justify-between ">
      <Link className="font-bold text-lg border px-6 py-1 rounded-lg bg-orange-500 " to='/'>Shopify</Link>
      
      <div className="flex gap-6 items-center">
       <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
       <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
       <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
       </svg>
        </Link>
       <Link to='/cart'className="border px-4 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500" >Cart🛒-{itemsCount}</Link>
      </div>

    </div>
    </>
  )
}

export default Navbar
