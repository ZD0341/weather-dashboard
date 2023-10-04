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
            var date = new Date().toLocaleDateString()
            document.getElementById('todayDate').innerHTML = "(" + date + ")"
            document.getElementById('searchedCity').innerHTML = data.name
            document.getElementById('todayTemp').innerHTML = data.main.temp
            document.getElementById('todayHumidity').innerHTML = data.main.humidity
            document.getElementById('todayWind').innerHTML = data.wind.speed

            lat = data.coord.lat;
            lon = data.coord.lon;

            fetchForecast(lat,lon)
        });
    });


}

function fetchForecast(lat,lon){

    var queryURL = baseUrl + '/forecast?lat=' + lat + '&lon=' + lon + '&cnt=40&units=imperial&appid=' + APIKey;

    fetch(queryURL).then((response) => {
        console.log(response)
        response.json().then((data) => {
            console.log(data);
            var date1 = data.list[0].dt_txt.split(' ')[0].split('-')
            var year1 = date1[0]
            var month1 = date1[1]
            var day1 = date1[2]
            document.getElementById('fiveDayDate1').innerHTML = month1 + "/" + day1 + "/" + year1
            document.getElementById('fiveDayTemp1').innerHTML = data.list[0].main.temp
            document.getElementById('fiveDayHumidity1').innerHTML = data.list[0].main.humidity
            document.getElementById('fiveDayWind1').innerHTML = data.list[0].wind.speed
            
            var date2 = data.list[7].dt_txt.split(' ')[0].split('-')
            var year2 = date2[0]
            var month2 = date2[1]
            var day2 = date2[2]
            document.getElementById('fiveDayDate2').innerHTML = month2 + "/" + day2 + "/" + year2
            document.getElementById('fiveDayTemp2').innerHTML = data.list[1].main.temp
            document.getElementById('fiveDayHumidity2').innerHTML = data.list[1].main.humidity
            document.getElementById('fiveDayWind2').innerHTML = data.list[1].wind.speed
            
            var date3 = data.list[15].dt_txt.split(' ')[0].split('-')
            var year3 = date3[0]
            var month3 = date3[1]
            var day3 = date3[2]
            document.getElementById('fiveDayDate3').innerHTML = month3 + "/" + day3 + "/" + year3
            document.getElementById('fiveDayTemp3').innerHTML = data.list[2].main.temp
            document.getElementById('fiveDayHumidity3').innerHTML = data.list[2].main.humidity
            document.getElementById('fiveDayWind3').innerHTML = data.list[2].wind.speed
            
            var date4 = data.list[23].dt_txt.split(' ')[0].split('-')
            var year4 = date4[0]
            var month4 = date4[1]
            var day4 = date4[2]
            document.getElementById('fiveDayDate4').innerHTML = month4 + "/" + day4 + "/" + year4
            document.getElementById('fiveDayTemp4').innerHTML = data.list[3].main.temp
            document.getElementById('fiveDayHumidity4').innerHTML = data.list[3].main.humidity
            document.getElementById('fiveDayWind4').innerHTML = data.list[3].wind.speed
            
            var date5 = data.list[31].dt_txt.split(' ')[0].split('-')
            var year5 = date5[0]
            var month5 = date5[1]
            var day5 = date5[2]
            document.getElementById('fiveDayDate5').innerHTML = month5 + "/" + day5 + "/" + year5
            document.getElementById('fiveDayTemp5').innerHTML = data.list[4].main.temp
            document.getElementById('fiveDayHumidity5').innerHTML = data.list[4].main.humidity
            document.getElementById('fiveDayWind5').innerHTML = data.list[4].wind.speed
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
