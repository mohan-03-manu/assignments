import { Link , Routes , Route} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <>
    <Navbar />

    <Routes>
     <Route path="/" element={<Products />} />
     <Route path="/details/:id" element={<Details />} />
     <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}