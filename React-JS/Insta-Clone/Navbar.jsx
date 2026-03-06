import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
         <div className="  border-b p-3 border-neutral-200">
           <div className=" w-[900px] mx-auto flex items-center justify-between">
            {/* <a href="/" className="text-2xl font-black">React SPA.</a> */}
            <Link to={"/"} className="text-2xl font-black">Instagram</Link>
            <div className="flex gap-3">
             <Link to={"/requests"}>Requests</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={""}>random link</Link>
           </div>
           </div>

         </div>
        </>
    )
}