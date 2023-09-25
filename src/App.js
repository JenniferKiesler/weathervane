import './App.css';
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import React, {useState} from 'react';

function App() {
  const [cityInfo, setCityInfo] = useState({})

  const getCurrentWeather = (city) => {
    console.log(city)
  }

  return (
    <>
      <header>
        <h1>WeatherVane</h1>
      </header>
      <main>
        <SearchForm
          getCurrentWeather={getCurrentWeather}
        />
        <CurrentWeather/>
        <WeatherForecast/>
      </main>
    </>
  );
}

export default App;
