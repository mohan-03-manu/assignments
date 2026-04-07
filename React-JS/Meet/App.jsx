import Home from "./Pages/Home"
import Error from "./Pages/Error"
import Important from "./Pages/Important"
import Previous from "./Pages/Previous";
import { Route, Routes } from "react-router";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
   <Navbar />

   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/previous" element={<Previous/>} />
     <Route path="*" element={<Error/>} />
   </Routes>
    </>
  )
}

export default App
