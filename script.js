const apikey = "b4b672ecf2d1f1609d1c7a6ada169c4f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
const searchItem = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather.icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
      
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchButton.addEventListener("click", () =>{
    checkWeather(searchItem.value);
})  