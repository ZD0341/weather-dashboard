var APIKey = "c2332ab353784f603d2622928b313f68";
//https://api.openweathermap.org/data/2.5/weather?q=LasVegas&appid=c2332ab353784f603d2622928b313f68
var baseUrl = 'https://api.openweathermap.org/data/2.5'

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

//https://api.openweathermap.org/data/2.5/

//weather?q=las%20vegas&appid=c2332ab353784f603d2622928b313f68
//forecast?lat=36.175&lon=-115.1372&cnt=5&appid=c2332ab353784f603d2622928b313f68


// Function to fetch weather data from an API
 function fetchWeatherData(city) {
    var queryURL = baseUrl + '/weather?q=' + city + '&units=imperial&appid=' + APIKey;

    var lat,lon;

    fetch(queryURL).then((response) => {
        console.log(response)
        response.json().then((data) => {
            console.log(data);
            document.getElementById('searchedCity').innerHTML = data.name
            document.getElementById('todayTemp').innerHTML = data.main.temp
            document.getElementById('todayHumidity').innerHTML = data.main.humidity
            document.getElementById('todayWind').innerHTML = data.wind.speed

            lat = 36.175;
            lon = -115.1372;

            fetchForecast(lat,lon)
        });
    });


}

function fetchForecast(lat,lon){

    var queryURL = baseUrl + '/forecast?lat=' + lat + '&lon=' + lon + '&cnt=5&units=imperial&appid=' + APIKey;

    fetch(queryURL).then((response) => {
        console.log(response)
        response.json().then((data) => {
            console.log(data);
        });
        
        
    });
}


searchButton.addEventListener('click', () => {
    const city = cityInput.value.toLowerCase();
    if (city.trim() !== '') {
        // Call the fetchWeatherData function with the entered city
        fetchWeatherData(city);

        // Add the city to the search history
        const searchItem = document.createElement('div');
        searchItem.textContent = city;
        searchItem.classList.add('search-item');
        searchItem.addEventListener('click', () => {
            fetchWeatherData(city);
        });
        searchHistory.appendChild(searchItem);

        // Clear the input field
        cityInput.value = '';
    }
});
