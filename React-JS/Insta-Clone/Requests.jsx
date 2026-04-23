import UserCard from "../Components/UserCard"
import users from "./Users"
export default function Requests(){
    return(
        <>
         <div className="mx-auto w-[400px] mt-24 mb-24">
        <h1 className=" font-bold text-2xl"> Your follow requests</h1>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quisquam unde sit!</p>

        {
            users.map(user=><UserCard img={user.image} name={user.name} username={user.username}  prof={user.profession} />)
        }
        </div>
        </>
    )
}