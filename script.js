const apikey = "89bde5b169909b936b5c20e45d685793";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=germany&units=metric";

async function checkweather(){
    const response = await fetch(apiURL + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
}
checkweather();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp;
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".Wind").innerHTML = data.wind.speed;