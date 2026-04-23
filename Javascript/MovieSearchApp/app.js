let api= 'https://www.omdbapi.com/?apikey=b3110826&t=';
let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let actors = document.querySelector('#actors');
let directors = document.querySelector('#directors');
let awards = document.querySelector('#awards');
let collection = document.querySelector('#collection');
let ratings = document.querySelector('#ratings');
let released = document.querySelector('#released');
let genre= document.querySelector('#genre');
let runtime= document.querySelector('#runtime');
let poster = document.querySelector('#poster');
let container = document.querySelector('#container');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion')
container.classList.add('hidden');


function search(){
let movieInput = document.querySelector('#movieName');
let query = api + movieInput.value;
fetch(query).then(data=>data.json()).then(data=>{
  error.innerText = "";
  if(data.Error === 'Movie not found!'){
     error.innerText = 'Movie not found!';
     }
    else{
    container.classList.remove('hidden')
    title.innerText = data.Title;
    desc.innerText = data.Plot;
    actors.innerText = data.Actors;
    directors.innerText = data.Director;
    awards.innerText = data.Awards;
    collection.innerText = data.BoxOffice;
    ratings.innerText = data.imdbRating;
    released.innerText = data.Released;
    genre.innerText = data.Genre;
    runtime.innerText = data.Runtime;
    poster.src = data.Poster;
    if (data.imdbRating > 7){
        suggestion.innerText = 'Worth Watching';
         suggestion.classList.add('worthWatching');
    }
    else if(data.imdbRating>6 && data.imdbRating<7){
      suggestion.innerText = 'Can Watch';
       suggestion.classList.add('canWatch');
    }
    else{
      suggestion.innerText = 'Time Waste';
       suggestion.classList.add('timeWaste');
    }
    }
    
  });
}