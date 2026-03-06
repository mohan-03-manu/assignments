 import { Link } from "react-router-dom"
 export default function Feed({img , id}){
    return(
        <>
        <Link to={`/post/${id}`}>
        <img src={img} className="w-[260px] h-[260px] flex-grow object-cover" alt="" />
        </Link>
        </>
    )
}