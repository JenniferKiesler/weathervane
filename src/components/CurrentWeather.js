import moment from "moment";

const CurrentWeather = ({ cityInfo, errorMessage }) => {
  let today = moment().format('ddd DD');

  const capitalizeWords = (string) => {
    if (string != "") {
      let words = string.split(" ")
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      }
      let combinedString = words.join(" ")
      return combinedString
    }
  }

  const roundTemp = (temp) => {
    if (temp != null) {
      let roundedTemp = Math.round(temp)
      return roundedTemp
    }
  }

  return (
    <>
      {cityInfo.name != "" ? 
      <div className="mt-3">
        <h2 id="city-name-date" className="text-center pb-2 fw-bold">{cityInfo.name} ({today})</h2>
        <div id="current-weather" className="card mx-auto">
          <div className="row col-12 mx-auto">
            <div className="col-6 pe-0">
              <p id="temperature" className="mt-2">{roundTemp(cityInfo.main.temp)}°F</p>
              <p className="fs-5">{capitalizeWords(cityInfo.weather[0].description)}</p>
              <p className="fs-5 lh-1 mb-3">Feels like {roundTemp(cityInfo.main.feels_like)}°F</p>
              <p>Wind: {cityInfo.wind.speed} mph</p>
              <p className="mb-3 lh-1">Humidity: {cityInfo.main.humidity}%</p>
            </div>
            <div className="col-6 text-center mt-3 px-0">
              <img id="weather-icon" src={'https://openweathermap.org/img/wn/' + cityInfo.weather[0].icon + '.png'} alt={cityInfo.weather[0].description}/>
            </div>
          </div>
        </div>
      </div>
      : <p className="text-center fs-1 text-danger fw-bold">{capitalizeWords(errorMessage)}</p>
      }
    </>
  )
}

export default CurrentWeather