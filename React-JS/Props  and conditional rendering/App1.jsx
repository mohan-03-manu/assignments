import User from "./components/User";
const users = [
  {
    name: "Himanshu",
    profession: "Student at NIT",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Ananya",
    profession: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Rohit",
    profession: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Priya",
    profession: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Karan",
    profession: "Data Analyst",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Sneha",
    profession: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Aman",
    profession: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Neha",
    profession: "Product Manager",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60"
  }
];

function App(){
  return(
  <div>
    {
      users.map(user=>{
        return <User name={user.name} desc={user.profession} img={user.image} />
      })
    }
  
  </div>
  )
}

export default App;