fetch('https://fakestoreapi.com/products')
    .then(res=> {
       console.log(res);       
       return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))