function User({ name, desc, img}){
    return(
        <>
        <div className="w-[400px] flex items-center bg-white  px-5 py-2 justify-between mx-auto rounded-lg mt-5">
            <div className="flex gap-4 items-center ">
               <img className="h-14 w-14 object-cover rounded-full" src={img} alt="" />
               <div>
                <p className="m-0">{name}</p>
                <p className="text-sm m-0">{desc}</p>
               </div>
           </div>
            <button className="">Follow</button>
        </div>
        
        </>
    )
}
export default User;