function Card({desc, img, ratings, title, price, type}){ 
  return(
    <>
   <div className="border w-[260px] p-2 rounded-xl" onClick={()=>{
    alert(`${title}is ordered`)}}>
    <div className="relative">
        <img className="rounded-xl" src ={img} alt="" />
        {
          ratings >=4.5 ? <div className="absolute bottom-0 px-3 m-2 bg-green-50 text-green-800 rounded-full text-sm "> Best Seller👍🏻</div> : ""
        }
        
    </div>
    <div className="flex justify-between items-center">
        <p className="mt-2 font-medium">{title}</p>
        <span className={type=='veg' ? 'h-2 w-2 rounded-full bg-green-500' :'h-2 w-2 rounded-full bg-red-500'}></span>
    </div>
      <p className=" text-md text-neutral-400">{desc}</p>

     <div className="flex justify-between items-center">
       <p className="font-semibold m-1">Rs-{price}/-</p>
      {
        price > 200 ? (<p className="text-red-600 text-sm "> 💲30 for delivery🚛</p>)
       : (<p className="text-green-600 text-sm ">Free delivery🚛</p>) 
        
      }
     </div>
      <p className="font-semibold text-xl m-1">Total: Rs-{price > 200 ? price + 30 : price}/-</p>
     </div>
    </>
  )
}

export default Card;