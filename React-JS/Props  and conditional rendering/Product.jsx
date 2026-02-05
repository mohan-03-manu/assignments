function Product({name ,desc ,img ,price ,rating ,delivery}){
    return(
        <>
        <div className="border w-72 p-4 mt-5 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white">
         <p className="text-lg font-semibold text-gray-800">{name}</p>
         <p className="text-sm mb-2 text-gray-500 ">{desc}</p>
         <div className="relative">
          <img className="rounded-xl w-full object-cover h-44 mb-3 transition-transform duration-200 hover:scale-105" src={img} alt="" />
          {
            rating >= 4.3 ? ( <span className="absolute top-1 right-1 text-xs font-semibold bg-white rounded-full px-2">Best seller🏆</span> ) : ""
          }
         </div>
         <p className="text-lg font-bold text-gray-900">Rs-<span className="text-blue-700 text-lg">{price}/-</span></p>
         <p className="text-gray-500">ratings- {rating}</p>
         <div className="flex items-baseline justify-between  mt-2">
         <p className="text-xs mt-2 bg-green-100 text-green-700 px-5 py-1 rounded-full inline-block" >🚛delivery in - {delivery}</p>
         {
            price > 1000 ? ( <p className="text-xs text-blue-700">Free delivery</p> ) : ( <p className="text-xs text-red-700">💲40 for delivery</p> )
         }
         </div>
         {
            price < 1000 ? ( <p className="text-xs bg-red-100 text-red-800 inline-block rounded-full px-3 mt-1 ">no return🔀</p> ) : ( <p className="text-xs bg-blue-100 text-blue-800 inline-block rounded-full px-3 mt-1 ">10 days 🔀 return</p> )
         }
         
         <button className="mt-4 w-full border border-blue-600 bg-blue-500 rounded-xl text-sm text-black py-2 hover:bg-blue-800" onClick={()=>{alert(`${name} is added to cart🛒`)}}>Add to cart</button>
         
        </div>
        
        </>
    )
}
export default Product;