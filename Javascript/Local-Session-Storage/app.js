// localStorage.clear()

// let nameInput = document.querySelector('input');
// let btn = document.querySelector('button');
// let form = document.querySelector('#welcomeForm');
// let nameSpan = document.querySelector('#name');

// btn.addEventListener('click', ()=>{
//     let name = nameInput.value;
//     localStorage.setItem('name',name);
//     checkForm()
// })

// function checkForm(){ 
// let userExists = 'name' in localStorage;
// if(userExists){
//   form.classList.add('hidden');
//   nameSpan.innerText = localStorage.getItem('name')
// }
// }

// checkForm()


// counter app
let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');
let counterDiv = document.querySelector('#counter');

incrementBtn.addEventListener('click',()=>{
   let counter = parseInt(sessionStorage.getItem('counter')) || 0;
   counter = counter + 1;
   sessionStorage.setItem('counter', counter);
   updateCounter()
})

decrementBtn.addEventListener('click',()=>{
   let counter = parseInt(sessionStorage.getItem('counter')) || 0;
   counter = counter - 1;
   sessionStorage.setItem('counter', counter)
    updateCounter()
})

function updateCounter(){
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counterDiv.innerText = counter;
}

updateCounter()
