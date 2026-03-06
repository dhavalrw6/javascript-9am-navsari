
let city = 'surat';
const api_key = 'e1696ae50939c36c95de68cb30eea6fa';
const api = `http://api.openweathermap.org/data/2.5/weather?appid=${api_key}&q=${city}&units=metric`;
const button = document.querySelector('#button');
const display_city = document.querySelector('#city'); 
const display_temp = document.querySelector('#temp'); 

const handleApi = async () => {
    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data);
        display_city.textContent =`City: ${data.name}`;
        display_temp.textContent = `Temp: ${data.main.temp} `
    } catch (error) {
        console.log(error);
    }
}


button.addEventListener('click',handleApi);