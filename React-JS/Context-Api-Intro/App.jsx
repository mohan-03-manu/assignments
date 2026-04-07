import Profile from "./Components/Profile";
import UserContext from "./Context/UserContext";
import { useContext } from "react";

function App() {
  const {setUser} = useContext(UserContext) 
  function loginHandler(){
      setUser({name: 'Akash', email: 'Akash@gmail.com', img: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'});
  }
  return (
    <>
    {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"> */}
      <div className="border-b py-3">
        <div className="flex justify-between max-w-4xl mx-auto ">
         <h3>Context API's</h3>
          <div>
            <button onClick={loginHandler} className="">Login</button>
          </div>
        </div>
      </div>

      <div className="mt-44 max-w-4xl mx-auto">
        <Profile />
      </div>
      
    </>
  )
}

export default App;
