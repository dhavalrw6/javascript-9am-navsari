let email = document.getElementById('email');
let password = document.getElementById('password');
let formWrapper = document.getElementById('form-wrapper');

let user = {
    email : "dhaval@gmail.com",
    password : "dhaval@123"
}

function handleSubmit(){
       if(user.email == email.value){
            if(user.password === password.value){
                alert("Login Successfully.");
                formWrapper.innerHTML = `<h2 class="text-center">Welcome to home page <br/> <strong class='text-danger'>${email.value}</strong></h2>`
            }else{
                alert("Password is incorrect.");
            }
       }else{
        alert("User not found.");
       }
    
}