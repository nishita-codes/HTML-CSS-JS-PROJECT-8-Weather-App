const apikey = "89bde5b169909b936b5c20e45d685793";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 
async function checkweather(city) {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "cloud"){
        weatherIcon.src = "weather.img/cloudy.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "weather.img/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather.img/Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather.img/Mist.png";
    }
    else if(data.weather[0].main == "snow"){
        weatherIcon.src = "weather.img/snow.png";
    }
     document.querySelector(".weather").style.display = "block";
    
}

searchbtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);
})


