const myMarksheet = document.getElementById('myMarksheet');
const rollno = document.getElementById('rollno');
const name = document.getElementById('name');
const html = document.getElementById('html');
const javascript = document.getElementById('javascript');
const bootstrapTailwind = document.getElementById('bootstrap-tailwind');
const reactjs = document.getElementById('reactjs');

// display varibles

const htmlDisplay = document.getElementById('html-display');
const javascriptDisplay = document.getElementById('javascript-display');
const btTwDisplay = document.getElementById('bt-tw-display');
const reactjsDisplay = document.getElementById('reactjs-display');
const totalDisplay = document.getElementById('total-display');
const avgDisplay = document.getElementById('avg-display');
let isDisplay = false;
function handleMyMarksheet(){  
    console.log(isDisplay); 
    if(isDisplay){
        myMarksheet.classList.add('d-none');
        isDisplay = false;
    }else{
        myMarksheet.classList.remove('d-none');
        isDisplay = true;
    }
    
    
}

function handleSubmit(){
    document.getElementById('name-display').innerText = name.value;
    document.getElementById('rollno-display').innerText = rollno.value;
    document.getElementById('enrollment').innerText += rollno.value;
    htmlDisplay.innerText = html.value;
    javascriptDisplay.innerText = javascript.value;
    btTwDisplay.innerText = bootstrapTailwind.value;
    reactjsDisplay.innerText = reactjs.value;
   totalDisplay.innerText = Number(htmlDisplay.innerText) +  Number(javascriptDisplay.innerText) +   Number(btTwDisplay.innerText) + Number(reactjsDisplay.innerText);

   avgDisplay.innerText = `${(Number(totalDisplay.innerText) / 4).toFixed(2)} %`;

    let avg = Number(avgDisplay.innerText);
    if(avg >= 80){
        
    }

    
}