
// let pera = document.getElementsByTagName('p');

// let element = document.getElementById('about-heading');

// let elements = document.getElementsByClassName('text');

// let element = document.querySelector('.about #about-heading');

// let elements = document.querySelectorAll('p');

let textElement = document.getElementById('text');
let inputElement = document.getElementById('input');
let display = document.getElementById('display');
inputElement.addEventListener('input',(e)=>{
    console.log(e.target.value);
    display.textContent = e.target.value
})

textElement.addEventListener('click',(e)=>{  
    console.log(e);
})


