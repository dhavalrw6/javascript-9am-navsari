const fetchBtn = document.querySelector('#fetchBtn');
const dogImage = document.querySelector('#dogImage');


const handleFetch = () => {
    dogImage.src = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'

    setTimeout(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dogImage.src = data.message;
            })
            .catch(error => console.log(error));
    }, 1000)
}

handleFetch();

fetchBtn.addEventListener('click', handleFetch)

