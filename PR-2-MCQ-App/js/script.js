import jsMCQ from "./mcq.js";

const displayQus = document.querySelector('.display-quiz .card-header h4');
const displayOption = document.querySelector('.display-quiz .card-body ul');
const displayList = document.querySelector('.qus-list ul');
const displayButtons = document.querySelector('.display-quiz-button');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentQus = 0;

const handleNext = () => {
    displayQus.textContent = `${currentQus + 1}). ` + jsMCQ[currentQus].question
    displayOption.innerHTML = ''
    // option array
    jsMCQ[currentQus].options.forEach((option) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');

        input.type = "radio";
        input.name = currentQus;
        input.value = option
        input.checked = jsMCQ[currentQus].yourans == option;
        li.appendChild(input);

        label.textContent = option;

        li.appendChild(label);
        displayOption.appendChild(li);
    })
    if (currentQus < jsMCQ.length - 1) {
        currentQus++;
    }

    const options = document.querySelectorAll('.display-quiz .card-body input[type="radio"]');

    options.forEach((option) => {
        option.addEventListener('change', (e) => {
            const {name,value} = e.target;
            jsMCQ[name].yourans = value;
        })
    })
    displayButtons.innerHTML = ''
    jsMCQ.forEach((element,index)=>{
        let btn = document.createElement('button');
        let btnColor = element.yourans ? 'btn-success' : 'btn-danger';
        btn.classList.add('btn',btnColor);
        btn.textContent = index + 1;
        displayButtons.appendChild(btn);
    })
    
}

handleNext();

// next button handle
next.addEventListener('click', handleNext);

const handleLeftList = () => {
    jsMCQ.forEach((value, index) => {
        const li = document.createElement('li');
        li.classList.add('px-2', 'py-1');
        li.innerHTML = `
            <button class="btn btn-primary w-100 btn-sm">${index + 1}</button>
        `
        displayList.appendChild(li);
    })
}

handleLeftList();

const listButtons = document.querySelectorAll('.qus-list ul button');

listButtons.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        currentQus = index;
        handleNext();
    })
})

const quizSubmit = document.querySelector('#quiz-submit');

const result = ()=>{
    let count = 0;
    jsMCQ.forEach((element)=>{
        if(element.answer == element.yourans)
        {
            count++;
        }
    })
    console.log(count);    
}
quizSubmit.addEventListener('click',result);