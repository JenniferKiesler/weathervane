import './App.css';
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import SearchHistory from './components/SearchHistory';
import React, {useEffect, useState} from 'react';

function App() {
  const [cityInfo, setCityInfo] = useState({
    name: ""
  })
  const [cityName, setCityName] = useState("")
  const [cities, setCities] = useState([])
  const [forecast, setForecast] = useState([])
  const [errorMessage, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  let apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    // gets the array of cities from local storage
    const cityHistory = JSON.parse(localStorage.getItem('cities'))
    if (cityHistory) {
      setCities(cityHistory)
    }
  }, [])

  // stores the array of cities to local storage whenever the cities variable changes
  useEffect(() => {
      localStorage.setItem('cities', JSON.stringify(cities))
  }, [cities])

  // adds the city name to the array of cities and stores the array of cities to local storage
  const saveSearch = (cityName) => {
    if (!cities.includes(cityName)) {
      const savedCities = [...cities, cityName]
      setCities([...cities, cityName])
      localStorage.setItem('cities', JSON.stringify(savedCities))
    }
  }

  // fetches the current weather data based on the search input
  const getCurrentWeather = (city) => {
    let urlPath

    // checks if city input are numbers
    let testInput = /^[0-9]+$/.test(city)
    
    // determines which url path to add to the fetch api url
    if (testInput) {
      urlPath = "zip=" + city
    } else {
      urlPath = "q=" + city
    }
 
    fetch("https://api.openweathermap.org/data/2.5/weather?" + urlPath + "&units=imperial&appid=" + apiKey)
    .then(response => {
      return response.json()
    })
    .then(cityData => {
      // checks if city was found 
      if (cityData.cod != "404") {
        setCityInfo(cityData)
        setCityName(cityData.name)
        saveSearch(cityData.name)
      } else {
        setError(cityData.message)
        setCityInfo({name: ""})
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  // fetches the forecast weather data based on the search input
  const getForecast = (city) => {
    setIsLoading(true)
    let urlPath
    
    // checks if city input are numbers
    let testInput = /^[0-9]+$/.test(city)
    
    // determines which url path to add to the fetch api url
    if (testInput) {
      urlPath = "zip=" + city
    } else {
      urlPath = "q=" + city
    }

    fetch("https://api.openweathermap.org/data/2.5/forecast?" + urlPath + "&units=imperial&appid=" + apiKey)
    .then(response => {
      return response.json()
    })
    .then(cityData => {
      // checks if city was found 
      if (cityData.cod != "404") {
        let fiveDays = []
        // loops through the list of city weather data and selects specific data in the array
        for (let i = 0; i < cityData.list.length; i = i + 8) {
          fiveDays.push(cityData.list[i]);
          setForecast(fiveDays)
        }
      } else {
        setForecast([])
      }
      setIsLoading(false)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="container-fluid">
      <header>
        <h1 className="text-center fs-1 fw-bold py-3">WeatherVane</h1>
      </header>
      <main>
        <SearchForm
          getCurrentWeather={getCurrentWeather}
          getForecast={getForecast}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <SearchHistory
          cities={cities}
          getCurrentWeather={getCurrentWeather}
          getForecast={getForecast}
          isLoading={isLoading}
        />
        {isLoading ? 
          <div className='text-center'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          : null
        }
        <CurrentWeather
          cityInfo={cityInfo}
          errorMessage={errorMessage}
        />
        <WeatherForecast
          forecast={forecast}
        />
      </main>
    </div>
  );
}

export default App;
