// api call

const cityWeatherInfo = () => {
    const searchField = document.getElementById('search-field')
    const locationName = searchField.value 
    searchField.value = ''
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=691cd8b199655a241ced02b648208852`

    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const displayWeather = (data) =>{
    const weatherContainer = document.getElementById('weather-info')

    weatherContainer.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <h1 class="lead">${data.sys.country}</h1>
         <h1>${data.name}</h1>
        <h3><span>${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].description}</h1>
    `

    // console.log(data.weather.description)

}