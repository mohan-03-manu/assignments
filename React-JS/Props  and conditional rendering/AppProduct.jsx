import Product from "./components/Product";
const products = [
  {
    name: "Wireless Headphones",
    desc: "Noise-cancelling over-ear headphones with deep bass",
    img: "https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfDB8MHx8fDA%3D",
    price: 2499,
    ratings: 4.5,
    deliveryTime: "2 days"
  },
  {
    name: "Smart Watch",
    desc: "Fitness tracking smart watch with heart rate monitor",
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfDB8MHx8fDA%3D",
    price: 1999,
    ratings: 4.3,
    deliveryTime: "1 day"
  },
  {
    name: "Bluetooth Speaker",
    desc: "Portable waterproof speaker with powerful sound",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfDB8MHx8fDA%3D",
    price: 1499,
    ratings: 4.4,
    deliveryTime: "3 days"
  },
  {
    name: "Gaming Mouse",
    desc: "High-precision RGB gaming mouse",
    img: "https://images.unsplash.com/photo-1588440573874-54185a266452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vdXNlfGVufDB8MHwwfHx8MA%3D%3D",
    price: 799,
    ratings: 4.6,
    deliveryTime: "2 days"
  },
  {
    name: "Laptop Backpack",
    desc: "Water-resistant backpack for 15-inch laptops",
    img: "https://media.istockphoto.com/id/2164305018/photo/laptop-with-modern-gadgets-and-accessories-for-work-and-study-in-backpack-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=z6ZcA19nmL5sgSTHcOy6CRzKGfqS4qWKUKG5toI4wZc=",
    price: 1299,
    ratings: 4.2,
    deliveryTime: "4 days"
  },
  {
    name: "Wireless Keyboard",
    desc: "Slim wireless keyboard with silent keys",
    img: "https://images.unsplash.com/photo-1765030999960-8cc726c281ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpcmVsZXNzJTIwa2V5Ym9hcmR8ZW58MHwwfDB8fHww",
    price: 999,
    ratings: 4.1,
    deliveryTime: "3 days"
  },
  {
    name: "Mobile Phone Stand",
    desc: "Adjustable desk stand for smartphones",
    img: "https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBzdGFuZHxlbnwwfDB8MHx8fDA%3D",
    price: 299,
    ratings: 4.0,
    deliveryTime: "2 days"
  },
  {
    name: "Power Bank",
    desc: "10000mAh fast charging power bank",
    img: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXJiYW5rfGVufDB8MHwwfHx8MA%3D%3D",
    price: 1199,
    ratings: 4.4,
    deliveryTime: "1 day"
  },
  {
    name: "Running Shoes",
    desc: "Lightweight running shoes with extra cushioning",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8MHwwfHx8MA%3D%3D",
    price: 2799,
    ratings: 4.5,
    deliveryTime: "5 days"
  },
  {
    name: "Desk Lamp",
    desc: "LED desk lamp with brightness control",
    img: "https://images.unsplash.com/photo-1523380262778-076eb862d38f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzayUyMGxhbXB8ZW58MHwwfDB8fHww",
    price: 899,
    ratings: 4.3,
    deliveryTime: "3 days"
  },
  {
    name: "Coffee Mug",
    desc: "Ceramic coffee mug with matte finish",
    img: "https://plus.unsplash.com/premium_photo-1719017276426-6dee20b81825?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwbXVnfGVufDB8MHwwfHx8MA%3D%3D",
    price: 349,
    ratings: 4.2,
    deliveryTime: "2 days"
  },
  {
    name: "Fitness Band",
    desc: "Water-resistant fitness band with sleep tracking",
    img: "https://plus.unsplash.com/premium_photo-1672280783581-cd302f891599?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZpdG5lc3MlMjBiYW5kfGVufDB8MHwwfHx8MA%3D%3D",
    price: 1599,
    ratings: 4.4,
    deliveryTime: "1 day"
  }
];

function App(){
    return(
        <>
        <div className="flex flex-wrap gap-3 mx-5 items-center ">
          {
            products.map(product =><Product name={product.name} desc={product.desc} img={product.img} price={product.price} rating={product.ratings} delivery={product.deliveryTime}/>)
          }
        </div>
        
        </>
    )
}
export default App;