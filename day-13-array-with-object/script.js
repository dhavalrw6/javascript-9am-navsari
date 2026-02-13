let todo = document.getElementById('todo');
let display = document.querySelector('#myTable tbody');
todo.focus(); 
let data = {};
let list = [];

const handleSubmit = ()=>{
    data = {
        id : Date.now(),
        text : todo.value
    }
    list.push(data);  
    todo.value = '';
    todo.focus(); 
    handleDisplay(); 
}

const handleDisplay = ()=>{
    display.innerHTML = '';

    list.forEach((value,index)=>{
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${value.text}</td>
            <td>
                <button type="button" >Delete</button> || 
                <button type="button" >Edit</button>  
            </td>
        `
        display.appendChild(row);
    })
}

handleDisplay();