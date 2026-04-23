function unlocked(){
    // let title = document.getElementById('heading');
    // let button = document.getElementById('btn');
    // title.innerText = 'Congrajulations now you can learn DOM';
    // btn.style.backgroundColor ='blue'

}

// function welcome(){
//      let studentname = document.getElementById('name');
//      let span = document.getElementById('namespan');
//      namespan.innerText = studentname.value;
//      studentname.value = ""
//      btn.style.display ='none';
// }


// function split(){
//     let amount = document.getElementById('amount');
//     let persons = document.getElementById('persons');
   
//     let result = (amount.value/persons.value).toFixed(2); 
//     let resultDiv = document.getElementById('result');
//         resultDiv.innerText = result
// }


// let counter = 0;
// let counterResult = document.getElementById('counterResult');

// function increment(){
//     counter = counter+1;
//    counterResult.innerText = counter 
// }
// function decrement(){
//     if(counter > 0) {
//         counter = counter-1;
//        counterResult.innerText = counter 
//     }
    
// }




// BMI calculator
function calculateBmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    
    let result = ( weight.value / (height.value*height.value)*10 ).toFixed(2);
    let resultBmi = document.getElementById('result');
    resultBmi.innerText = result

    if(result <=18.5){
        document.getElementById('underWeight').innerText = 'You are Under😔 Weight';
    }
    else if (result >18.5  && result <=24.9){
        document.getElementById('normalWeight').innerText = 'You are Normal🍎 Weight';
    }
    else if (result >25  && result <=34.9){
        document.getElementById('obesity').innerText = 'You are Obesity😧';
    }
    
}