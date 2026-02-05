function TouristPlace({placeName, desc, img, whenToVisit, ratings, price}){
 return(
     <>
     <div className=" border w-60 p-4 rounded-xl shadow-md hover:shadow-md transition">
        <h1 className=" text-lg mb-1 font-semibold">{placeName}</h1>
        <p className="text-sm text-neutral-600 mb-2">{desc}</p>
        <div className="relative">
        <img className=" h-40 object-cover mb-3 rounded-xl" src={img} alt="" />
            {
                whenToVisit == "Summer" ? ( <span className="absolute top-1 left-1 text-[12px] bg-yellow-50 rounded-full ">Best time🌞</span> ) 
                : ( <span className="absolute top-1 left-1 bg-yellow-50 text-[12px] rounded-full px-1">Best time❄️</span>)
            }

        </div>
           <p className="text-sm ">Visiting time: {whenToVisit}</p>
           <p className="text-sm">Ratings: {ratings}</p>
              <p>Per person cost: <span className="text-blue-800 text-sm ">₹{price}</span></p>
             {
              price > 12000 ? (<span className=" bg-red-200 text-sm rounded-xl px-1 text-red-800">Expensive</span> ) 
              : ( <span className=" bg-green-200 text-sm rounded-xl px-1 text-green-800"> Cheaper</span>)
             }
        </div>
        </>
    )
}

export default TouristPlace;