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
    const cityHistory = JSON.parse(localStorage.getItem('cities'))
    if (cityHistory) {
      setCities(cityHistory)
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('cities', JSON.stringify(cities))
  }, [cities])

  const saveSearch = (cityName) => {
    if (!cities.includes(cityName)) {
      const savedCities = [...cities, cityName]
      setCities([...cities, cityName])
      localStorage.setItem('cities', JSON.stringify(savedCities))
    }
  }

  const getCurrentWeather = (city) => {
    console.log(isLoading)
    let urlPath
    let testInput = /^[0-9]+$/.test(city)
    
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

  const getForecast = (city) => {
    console.log(city)
    setIsLoading(true)
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey)
    .then(response => {
      return response.json()
    })
    .then(cityData => {
      console.log(cityData)
      if (cityData.cod != "404") {
        let fiveDays = []
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
