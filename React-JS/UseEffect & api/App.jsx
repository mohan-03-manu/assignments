import { Link , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import Products from "./Pages/Products"
export default function App() {
  return (
    <>
    <div className="border-b py-4 px-28 flex justify-between">
      <Link className="font-semibold text-md" to='/'>API's and UseEffect</Link>
      
      <div className="flex gap-4">
       <Link to='/'>Home</Link>
       <Link to='/details'>Details</Link>
      </div>

    </div>

    <Routes>
     <Route path="/" element={<Products />} />
     <Route path="/details/:id" element={<Details />} />
    </Routes>
    </>
  )
}