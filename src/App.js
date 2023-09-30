import './App.css';
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import React, {useState} from 'react';

function App() {
  const [cityInfo, setCityInfo] = useState({
    name: ""
  })

  let apiKey = process.env.REACT_APP_API_KEY

  const getCurrentWeather = (city) => {
    console.log(city)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)
    .then(response => {
      return response.json()
    })
    .then(cityData => {
      setCityInfo(cityData)
    })
  }

  return (
    <div className="container">
      <header>
        <h1 className="text-center fs-1 fw-bold py-3">WeatherVane</h1>
      </header>
      <main>
        <SearchForm
          getCurrentWeather={getCurrentWeather}
        />
        <CurrentWeather
          cityInfo={cityInfo}
        />
        <WeatherForecast/>
      </main>
    </div>
  );
}

export default App;
