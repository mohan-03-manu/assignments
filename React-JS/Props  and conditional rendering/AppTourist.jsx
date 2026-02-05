import TouristPlace from "./components/TouristPlace";
const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife,Portuguese heritage and rich culture.",
    img: "https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29hfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWxpfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://images.unsplash.com/photo-1624554305378-0f440dd3a8c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2VyYWxhfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];

function App(){
    return(
        <>
       <div className="flex gap-4 justify-center mt-10">
         {
          touristPlaces.map(touristPlace =><TouristPlace placeName={touristPlace.placeName} desc={touristPlace.desc} img={touristPlace.img} whenToVisit={touristPlace.whenToVisit} ratings={touristPlace.ratings} price={touristPlace.price}/>)

         }
       </div>
        
        
        
        </>
    )
}

export default App;
