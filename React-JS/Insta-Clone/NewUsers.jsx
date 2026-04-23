const Users = [
{
name: "Aarav Sharma",
username: "aarav.codes",
profession: "Frontend Developer",
image: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?w=600",
Desc: "Building beautiful web experiences ✨ | React | UI/UX",
followers: 12450,
following: 540,
posts: [
{ id:1, img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", caption:"Late night coding session 💻", likes:1200, postedDate:"2026-01-10"},
{ id:2, img:"https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=600", caption:"Building a new React UI ✨", likes:980, postedDate:"2026-02-14"},
{ id:3, img:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600", caption:"Clean code = happy developer 😎", likes:1540, postedDate:"2026-03-01"}
]
},

{
name: "Priya Nair",
username: "priya.designs",
profession: "UI/UX Designer",
image: "https://plus.unsplash.com/premium_photo-1682096511044-f8aba3d94141?w=600",
Desc: "Designing clean and modern interfaces 🎨",
followers: 18900,
following: 610,
posts: [
{ id:4, img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600", caption:"Minimal UI always wins 🎨", likes:2200, postedDate:"2026-01-05"},
{ id:5, img:"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600", caption:"New dashboard design ✏️", likes:1750, postedDate:"2026-02-02"},
{ id:6, img:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=600", caption:"Color palette experiment 🌈", likes:2100, postedDate:"2026-02-20"}
]
},

{
name: "Rohan Patel",
username: "rohan.fitlife",
profession: "Fitness Coach",
image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=600",
Desc: "Helping people stay strong 💪 | Fitness & Lifestyle",
followers: 30500,
following: 420,
posts: [
{ id:7, img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", caption:"Never skip leg day 🦵🔥", likes:3500, postedDate:"2026-01-18"},
{ id:8, img:"https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600", caption:"Morning workout done 💪", likes:2870, postedDate:"2026-02-12"},
{ id:9, img:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600", caption:"Consistency beats motivation 🔥", likes:4100, postedDate:"2026-02-28"}
]
},

{
name: "Ananya Gupta",
username: "ananya.travels",
profession: "Travel Blogger",
image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600",
Desc: "Exploring the world 🌍 | Travel stories & tips",
followers: 45200,
following: 780,
posts: [
{ id:10, img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600", caption:"Mountains calling 🏔️", likes:5200, postedDate:"2026-01-02"},
{ id:11, img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600", caption:"Sunset views 🌅", likes:6100, postedDate:"2026-02-06"},
{ id:12, img:"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600", caption:"Road trips are the best 🚗", likes:5800, postedDate:"2026-03-03"}
]
},

{
name: "Vikram Singh",
username: "vikram.photo",
profession: "Photographer",
image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600",
Desc: "Capturing moments through my lens 📸",
followers: 22100,
following: 350,
posts: [
{ id:13, img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600", caption:"Nature through my lens 📸", likes:2700, postedDate:"2026-01-11"},
{ id:14, img:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600", caption:"Golden hour magic ✨", likes:3200, postedDate:"2026-02-17"},
{ id:15, img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600", caption:"Adventure shot 🏕️", likes:2980, postedDate:"2026-03-02"}
]
},

{
name: "Meera Iyer",
username: "meera.foodie",
profession: "Food Blogger",
image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=600",
Desc: "Food lover 🍕 | Sharing tasty recipes",
followers: 27800,
following: 690,
posts: [
{ id:16, img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600", caption:"Dinner goals 🍝", likes:4300, postedDate:"2026-01-14"},
{ id:17, img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600", caption:"Healthy breakfast bowl 🥗", likes:3900, postedDate:"2026-02-10"},
{ id:18, img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600", caption:"Sweet cravings 🍰", likes:4500, postedDate:"2026-02-25"}
]
},

{
name: "Karan Mehta",
username: "karan.tech",
profession: "Software Engineer",
image: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfDB8MHx8fDA%3D",
Desc: "Tech enthusiast 🤖 | Coding | Startups",
followers: 15600,
following: 510,
posts: [
{ id:19, img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600", caption:"Hardware hacking 🔧", likes:1700, postedDate:"2026-01-20"},
{ id:20, img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600", caption:"Debugging mode on 🧠", likes:1950, postedDate:"2026-02-16"},
{ id:21, img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600", caption:"Startup brainstorming 🚀", likes:2100, postedDate:"2026-03-04"}
]
},

{
name: "Sneha Kapoor",
username: "sneha.style",
profession: "Fashion Influencer",
image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=600",
Desc: "Fashion | Lifestyle | Daily outfits 👗",
followers: 52000,
following: 830,
posts: [
{ id:22, img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600", caption:"Street style vibes 👗", likes:7200, postedDate:"2026-01-07"},
{ id:23, img:"https://images.unsplash.com/photo-1520975922203-b3bce66c5a1c?w=600", caption:"Weekend outfit inspo ✨", likes:8100, postedDate:"2026-02-11"},
{ id:24, img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600", caption:"Minimal fashion look 🖤", likes:7600, postedDate:"2026-02-27"}
]
},

{
name: "Aditya Verma",
username: "adi.music",
profession: "Music Producer",
image: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWNpYW58ZW58MHwwfDB8fHww",
Desc: "Creating beats 🎧 | Music is life",
followers: 19800,
following: 470,
posts: [
{ id:25, img:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600", caption:"Studio vibes 🎧", likes:2600, postedDate:"2026-01-03"},
{ id:26, img:"https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600", caption:"Recording new track 🎤", likes:3100, postedDate:"2026-02-08"},
{ id:27, img:"https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=600", caption:"Music production day 🎶", likes:2950, postedDate:"2026-03-01"}
]
},

{
name: "Neha Reddy",
username: "neha.art",
profession: "Digital Artist",
image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=600",
Desc: "Digital illustrations & creativity 🎨",
followers: 24300,
following: 560,
posts: [
{ id:28, img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600", caption:"Sketching ideas ✏️", likes:3400, postedDate:"2026-01-12"},
{ id:29, img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600", caption:"Digital painting session 🎨", likes:3750, postedDate:"2026-02-15"},
{ id:30, img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600", caption:"Creative inspiration 🌈", likes:3600, postedDate:"2026-02-26"}
]
}
];

export default Users;