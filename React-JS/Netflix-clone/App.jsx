import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import MovieCard from "./Components/MovieCard"
export default function App() {
  return (
    < >
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:slug" element={<Details />} />
    </Routes>
    </>
  )
}