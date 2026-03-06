const inputs = document.querySelectorAll('#product-form .form-control');
const productForm = document.querySelector('#product-form');
const displayProducts = document.querySelector('#display-products');
let editData = JSON.parse(localStorage.getItem('editData')) || {};
const search = document.querySelector('input[type="search"]');

if(location.href.includes('view_product')){
    search.style.display = "block"
}else{
    search.style.display = "none"
}


let data = {};
let list = JSON.parse(localStorage.getItem('list')) || [];

inputs?.forEach((input) => {
    input.addEventListener('input', (e) => {
        const { name, value } = e.target;
        data = { ...data, [name]: value };
    })
})


productForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let newList = [];

    if(editData.id){
        newList = list.map((item)=>{
            if(editData.id == item.id) return data;
            return item;
        })
        localStorage.removeItem('editData');
        editData = {};
        location.href = './view_product.html';
    }else{
        newList = [...list, { ...data, id: Date.now() }];
    }

    
    list = newList;
    localStorage.setItem('list', JSON.stringify(list));
});

const handleDisplay = (list) => {
    displayProducts.innerHTML = ''
    list.forEach((product, index) => {
        let { title, image, stock, price, description, category, id } = product;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <img src="${image}" alt="${title}" width="100px">
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td>${stock}</td>
            <td>${description}</td>
            <td>
                <button class="btn btn-danger" type="button" onclick="handleDelete(${id})">Delete</button>
                <button class="btn btn-warning" type="button" onclick="handleEdit(${id})">Edit</button>
            </td>
        `
        displayProducts.appendChild(row);
    })
}

const handleDelete = (id) => {
    console.log(id);

}

const handleEdit = (id) => {
    console.log(id);
    let data = list.find(item => item.id == id);
    localStorage.setItem('editData', JSON.stringify(data));
    window.location.href = './add_product.html';    
}

if (displayProducts) {
    handleDisplay(list);
}

const handleEditData = () => {
    inputs?.forEach((input) => {
        const { name } = input;
        input.value = editData[name];
    })
}

if(editData.id){
    data = editData;
    handleEditData(); 
}

search?.addEventListener('input',(e)=>{
    const {value} = e.target;
    
    let newList = list.filter(item =>{
        if(item.title.toLowerCase().includes(value.toLowerCase())){
            return item;
        }
    })
    handleDisplay(newList);
})