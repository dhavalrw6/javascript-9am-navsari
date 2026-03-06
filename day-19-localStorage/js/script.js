const inputs = document.querySelectorAll('#myTodo .my-todo-app');
const myTodoFrom = document.querySelector('#myTodo');
const displayTodo = document.querySelector('#display-todo tbody');

let list = JSON.parse(localStorage.getItem('list')) ?? [];
let data = JSON.parse(localStorage.getItem('editData')) || {};
let languages = JSON.parse(localStorage.getItem('lang')) ?? [];
let editData = JSON.parse(localStorage.getItem('editData'));

inputs?.forEach((input) => {
    input.addEventListener('input', function (e) {
        let { name, value, checked } = e.target;

        if (name == 'languages') {
            if (checked) {
                languages.push(value);
            } else {
                languages = languages.filter((data) => {
                    if (data != value) {
                        return value;
                    }
                })
            }
            value = languages;
        }
        data = { ...data, [name]: value };
    })
})

myTodoFrom?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (data.id) {
        list = list.map((item)=>{
            if(item.id == data.id) return data;
            return item;
        })

        localStorage.removeItem('editData');
    } else {
        let newObj = {
            id: Date.now(),
            ...data
        }

        list.push(newObj);
    }
    console.log(list);

    localStorage.setItem('list', JSON.stringify(list));
    myTodoFrom.reset();
});

const handleDisplay = () => {

    displayTodo.innerHTML = '';

    list.forEach((value, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${value.text}</td>
            <td>${value.date}</td>
            <td>${value.languages}</td>
            <td>
                <button class="btn btn-danger" onclick="handleDelete(${value.id})" type="button">Delete</button>
                <button class="btn btn-warning" onclick="handleEdit(${value.id})" type="button">Edit</button>
            </td>
        `
        displayTodo.appendChild(row);
    })
}

if (displayTodo) {
    handleDisplay();
}

// const handleDelete=(id)=>{
//     list = list.filter((item)=>{
//         if(item.id != id){
//             return item;
//         }
//     })
//     handleDisplay();
//     localStorage.setItem('list',JSON.stringify(list));
// }

const handleDelete = (id) => {
    list = list.filter(item => item.id != id);
    localStorage.setItem('list', JSON.stringify(list));
    handleDisplay();
}

const handleEdit = (id) => {
    console.log(id);
    let editData = list.find(item => item.id == id);
    let lang = editData["languages"]
    
    localStorage.setItem('lang', JSON.stringify(lang));
    localStorage.setItem('editData', JSON.stringify(editData));
    window.location.href = './index.html';
}

if (editData) {
    inputs.forEach((input) => {
        const { name } = input;

        if (name == 'languages') {
            editData[name].forEach((item) => {
                if (item == input.value) {
                    input.checked = true;
                }
            })
        } else {
            input.value = editData[name];
        }

    })
}