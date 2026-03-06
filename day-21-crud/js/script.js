const inputs = document.querySelectorAll('#myForm .form-control');
const myForm = document.querySelector('#myForm');
const myTable = document.querySelector('#myTable tbody');
let editUser = JSON.parse(localStorage.getItem('editUser')) || {};
let data = {};
let list = JSON.parse(localStorage.getItem('userList')) || [];

inputs?.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        const {name,value} = e.target;
        data = {...data, [name]:value};
    });
})

myForm?.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(data.id){
        list = list.map((item)=>{
            if(item.id == data.id) return data;
            return item;
        })
        location.href = './view-users.html'
    }else{
        list.push({...data,id:Date.now()});
    }

    editUser = {};
    data = {};
    localStorage.setItem('userList',JSON.stringify(list));
    myForm.reset();
})

const handleDisplay = (list)=>{
    myTable.innerHTML = '';
    list.forEach((item,index)=>{
        const {email,password,id} = item;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="handleDelete(${id})">Delete</button>
                <button type="button" class="btn btn-warning" onclick="handleEdit(${id})">Edit</button>
            </td>
        `
        myTable.append(row);
    })
}

if(myTable){
    handleDisplay(list);
}

const handleDelete=(id)=>{  
    list = list.filter(item => item.id != id);
    localStorage.setItem('userList',JSON.stringify(list));
    handleDisplay(list);
}

const handleEdit = (id)=>{
    let data = list.find(item => item.id == id);
    localStorage.setItem('editUser',JSON.stringify(data));
    location.href = './index.html';
}

const displayEditUser = ()=>{

    inputs.forEach((input)=>{
        input.value = editUser[input.name];
    })

}

if(editUser.id){
    data = editUser;
    displayEditUser();
}