// const API_KEY = `ecb32b20ffd1f89bba9141f7a54e3288`;
const searchTemperature = () => {
    const API_KEY = `ecb32b20ffd1f89bba9141f7a54e3288`
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}=&units=metric`;
console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }

// const displayTemperature = temperature => {
//     setInnerText('city', temperature.name);
//     setInnerText('temperature', temperature.main.temp);
//     setInnerText('condition', temperature.weather[0].main);
//     // set weather icon
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }