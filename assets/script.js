var APIkey = "c2332ab353784f603d2622928b313f68";

 // Function to fetch weather data from an API
 function fetchWeatherData(city) {
   
}

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const searchHistory = document.getElementById('search-history');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
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
