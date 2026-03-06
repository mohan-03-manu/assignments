import Users from "./NewUsers"
import Feed from "../Components/Feed";
import { useParams } from "react-router-dom"
export default function UserDetails (){
    let {username} = useParams();
    let user = Users.find(user=>user.username == username )
    return(
        <>
         <div className="mx-auto w-[600px] mt-24 mb-24 flex gap-4 items-center">
         <div className="w-1/4"><img src={user.image} className="h-32 w-32 rounded-full object-cover" alt="" /></div>
         <div className="w-3/4">
            <h1 className="text-2xl font-bold"> {username}</h1>
            <h1>{user.profession}</h1>
            <p>{user.Desc}</p>
            <div className="flex gap-3 mt-2 ">
                <div className="bg-neutral-200 rounded-md px-3 py-1">{user.followers} Followers</div>
                <div className="bg-neutral-200 rounded-md px-3 py-1">{user.following} Following</div>
            </div>
         </div>
        </div>

        <div className="w-[800px] mx-auto">
            <div className="flex flex-wrap gap-2">
            {
            user.posts.map(post=> <Feed img={post.img} id={post.id} />)
            }

            </div>
           
        </div>
        </>
    )
}