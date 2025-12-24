const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];
  
  console.log(movies);
 
//   a.Mapping
    //    * titles of movies
       let title = movies.map(movie=>movie.title) 
       console.log(title)

    //    * titles and imdbratings
       let titlerating = movies.map(movie=>movie.title + " " + movie.imdbRating)
       console.log(titlerating)      

//  b.Filtering
      let thrillerfilter = movies.filter(movie=>movie.genre == 'Thriller').filter(movie=>movie.year > 2000)
      console.log(thrillerfilter)

      let dramafilter = movies.filter(movie=>movie.genre == 'Drama').filter(movie=>movie.imdbRating > 8.5)
      console.log(dramafilter)

      let actionstarring =movies.filter(movie=>movie.genre == 'Action').filter(movie=>movie.actors =='Leonardo DiCaprio')
      console.log(actionstarring)

//  c.Chaining

       let dramacristian = movies.filter(movie=>movie.genre == 'Drama').filter(movie=>movie.actors =='Christian Bale')
       console.log(dramacristian)

       let dramatimrobbin =  movies.filter(movie=>movie.genre == 'Drama').filter(movie=>movie.actors == 'Tim Robbins')
       console.log(dramatimrobbin)




// // const people = [
// //   { name: "Aarav Sharma", email: "aarav.sharma@gmail.com", gender: "Male", salary: 45000, age: 25 },
// //   { name: "Priya Verma", email: "priya.verma@gmail.com", gender: "Female", salary: 52000, age: 28 },
// //   { name: "Rohan Patel", email: "rohan.patel@gmail.com", gender: "Male", salary: 48000, age: 26 },
// //   { name: "Sneha Iyer", email: "sneha.iyer@gmail.com", gender: "Female", salary: 60000, age: 30 },
// //   { name: "Vikram Singh", email: "vikram.singh@gmail.com", gender: "Male", salary: 55000, age: 32 },
// //   { name: "Ananya Rao", email: "ananya.rao@gmail.com", gender: "Female", salary: 47000, age: 24 },
// //   { name: "Karthik R", email: "karthik.r@gmail.com", gender: "Male", salary: 50000, age: 27 },
// //   { name: "Meera Nair", email: "meera.nair@gmail.com", gender: "Female", salary: 58000, age: 29 },
// //   { name: "Rahul Das", email: "rahul.das@gmail.com", gender: "Male", salary: 62000, age: 34 },
// //   { name: "Pooja Kulkarni", email: "pooja.k@gmail.com", gender: "Female", salary: 49000, age: 26 }
// // ];
// // let names = people.map(user=>user.gender)
// // console.log(names)





// const employees = [
//   {
//     name: "Arjun Kumar",
//     email: "arjun.kumar@gmail.com",
//     phoneNo: "9876543210",
//     gender: "Male",
//     salary: 45000,
//     experience: 2
//   },
//   {
//     name: "Neha Singh",
//     email: "neha.singh@gmail.com",
//     phoneNo: "9123456789",
//     gender: "Female",
//     salary: 52000,
//     experience: 3
//   },
//   {
//     name: "Ravi Patel",
//     email: "ravi.patel@gmail.com",
//     phoneNo: "9988776655",
//     gender: "Male",
//     salary: 60000,
//     experience: 5
//   },
//   {
//     name: "Anjali Mehta",
//     email: "anjali.mehta@gmail.com",
//     phoneNo: "9012345678",
//     gender: "Female",
//     salary: 48000,
//     experience: 2
//   },
//   {
//     name: "Kiran Rao",
//     email: "kiran.rao@gmail.com",
//     phoneNo: "9090909090",
//     gender: "Male",
//     salary: 70000,
//     experience: 7
//   },
//   {
//     name: "Pooja Nair",
//     email: "pooja.nair@gmail.com",
//     phoneNo: "9345678123",
//     gender: "Female",
//     salary: 55000,
//     experience: 4
//   }
// ];

// let names = employees.map(id=>id.name)
// console.log(names)

// let salary = employees.map(sal=>sal.salary)
// console.log(salary)

// let both = employees.map(employ=>employ.name +" "+ employ.salary + " " + employ.gender)
// console.log(both) 


