const key = `eecb32b20ffd1f89bba9141f7a54e3288`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
// const setInnerText =(id,text)=>{
//     document.getElementById(id).innerText=text;
// }
// const displayTemperature = tempareture=>{
//     setInnerText('city',tempareture.name)
//     setInnerText('temparature',tempareture.main.temp)
//     setInnerText('condition',tempareture.weather[0].main)
// }