import Card from "./components/Card";

const items = [
  {
    name: "Paneer Butter Masala",
    img: "https://images.unsplash.com/photo-1690401769082-5f475f87fb22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8MHwwfHx8MA%3D%3D",
    desc: "Creamy tomato-based curry cooked with paneer and butter.",
    price: 220,
    type: "veg",
    ratings: 4.3
  },
   {
    name: "Pav Bhaji",
    img: "https://media.istockphoto.com/id/1438867572/photo/pav-bhaji-is-a-fast-food-dish-from-india-consisting-of-a-thick-vegetable-curry-served-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=BGFXFHagLBF_1xTBh3j9gwi3dkKRO74dXeoXOKJPCmw=",
    desc: "Spicy mashed vegetable curry served with buttered pav.",
    price: 160,
    type: "veg",
    ratings: 4.6
  },
  {
    name: "Masala Dosa",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzYWxhJTIwZG9zYXxlbnwwfDB8MHx8fDA%3D",
    desc: "Crispy dosa stuffed with potato masala, served with chutney.",
    price: 120,
    type: "veg",
    ratings: 4.5
  },
   {
    name: "Veg Fried Rice",
    img: "https://images.unsplash.com/photo-1664717698774-84f62382613b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyaWVkJTIwcmljZXxlbnwwfDB8MHx8fDA%3D",
    desc: "Stir-fried rice tossed with fresh vegetables and soy sauce.",
    price: 160,
    type: "veg",
    ratings: 4.2
  },
  {
    name: "Chicken Biryani",
    img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
    desc: "Flavorful basmati rice cooked with spicy chicken and aromatic spices.",
    price: 280,
    type: "non-veg",
    ratings: 4.8
  },
  {
    name: "Fish Fry",
    img: "https://images.unsplash.com/photo-1656389863341-1dfd38ee6edc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGZyeXxlbnwwfDB8MHx8fDA%3D",
    desc: "Marinated fish shallow-fried until crispy and golden.",
    price: 260,
    type: "non-veg",
    ratings: 4.3
  },
  {
    name: "Butter Chicken",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfDB8MHx8fDA%3D",
    desc: "Tender chicken pieces cooked in rich, creamy tomato gravy.",
    price: 200,
    type: "non-veg",
    ratings: 4.7
  },
  {
    name: "Mutton Curry",
    img: "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.webp?a=1&b=1&s=612x612&w=0&k=20&c=YfBWKFt3Zje8yRAlAdteLnL5vhJvCnf2Vj2CU2ytgE4=",
    desc: "Slow-cooked mutton curry with traditional Indian spices.",
    price: 360,
    type: "non-veg",
    ratings: 3.9
  }
];

 
function App(){
  return(
  <>
  <div className="flex flex-wrap  gap-4 mt-12 justify-center" >
     {
      items.map(item=><Card img={item.img} ratings={item.ratings} title={item.name} desc={item.desc} type={item.type} price={item.price}/>)
     }


   </div>
    
  
  </>
  )
}

export default App;

