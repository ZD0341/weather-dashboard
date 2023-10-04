var APIKey = "c2332ab353784f603d2622928b313f68";
//https://api.openweathermap.org/data/2.5/weather?q=LasVegas&appid=c2332ab353784f603d2622928b313f68
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

// Function to fetch weather data from an API
 function fetchWeatherData(city) {
    var queryURL = baseUrl + '?q=' + city + "&appid=" + APIKey;

    fetch(queryURL).then((response) => {
        console.log(response)
        response.json().then((data) => {
            console.log(data);
            document.getElementById('searchedCity').innerHTML = 'test'
            document.getElementById('todayTemp').innerHTML = 'test'
            document.getElementById('todayHumidity').innerHTML = 'test'
            document.getElementById('todayWind').innerHTML = 'test'
        });
        weatherToday = document.getElementById('weather-today')
        
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
