import moment from "moment"

const WeatherForecast = ({ forecast }) => {
  console.log(forecast)

  const roundTemp = (temp) => {
    if (temp != null) {
      let roundedTemp = Math.round(temp)
      return roundedTemp
    }
  }

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

  const setForecastCards = (day) => {
    if (day) {
      let forecastDate = moment(day.dt, "X").format("l");
      let forecastIcon = 'https://openweathermap.org/img/wn/' + day.weather[0].icon + '.png';
      let forecastTemp = roundTemp(day.main.temp);
      let forecastWind = day.wind.speed;
      let forecastHumidity = day.main.humidity;
      let forecastDescription = capitalizeWords(day.weather[0].description)

      return [forecastDate, forecastIcon, forecastDescription, forecastTemp, forecastWind, forecastHumidity]
    }
  }

  let dayOne = setForecastCards(forecast[0]);
  let dayTwo = setForecastCards(forecast[1]);
  let dayThree = setForecastCards(forecast[2]);
  let dayFour = setForecastCards(forecast[3]);
  let dayFive = setForecastCards(forecast[4]);

  return (
    <>
    {forecast.length != 0 ?
      <div className="">
        <h3 id="five-day" className="text-center mt-5 mb-3 fw-bold">5-Day Forecast</h3>
        <div className="row gy-4 justify-content-around text-center lh-1">
          <div id="day-1" className="day card col-5 col-lg-2 col-md-4 py-2">
            <p className="fs-4">{dayOne[0]}</p>
            <img className="forecast-icon" src={dayOne[1]} alt={dayOne[2]}/>
            <p className="fs-1 mb-1">{dayOne[3]}°F</p>
            <p className="fs-5">{dayOne[2]}</p>
            <p className="mt-3 mb-1">Wind: {dayOne[4]}mph</p>
            <p>Humidity: {dayOne[5]}%</p>
          </div>
          <div id="day-2" className="day card col-5 col-lg-2 col-md-4 py-2">
            <p className="fs-4">{dayTwo[0]}</p>
            <img className="forecast-icon" src={dayTwo[1]} alt={dayTwo[2]}/>
            <p className="fs-1 mb-1">{dayTwo[3]}°F</p>
            <p className="fs-5">{dayTwo[2]}</p>
            <p className="mt-3 mb-1">Wind: {dayTwo[4]}mph</p>
            <p>Humidity: {dayTwo[5]}%</p>
          </div>
          <div id="day-3" className="day card col-5 col-lg-2 col-md-4 py-2">
            <p className="fs-4">{dayThree[0]}</p>
            <img className="forecast-icon" src={dayThree[1]} alt={dayThree[2]}/>
            <p className="fs-1 mb-1">{dayThree[3]}°F</p>
            <p className="fs-5">{dayThree[2]}</p>
            <p className="mt-3 mb-1">Wind: {dayThree[4]}mph</p>
            <p>Humidity: {dayThree[5]}%</p>
          </div>
          <div id="day-4" className="day card col-5 col-lg-2 col-md-4 py-2">
            <p className="fs-4">{dayFour[0]}</p>
            <img className="forecast-icon" src={dayFour[1]} alt={dayFour[2]}/>
            <p className="fs-1 mb-1">{dayFour[3]}°F</p>
            <p className="fs-5">{dayFour[2]}</p>
            <p className="mt-3 mb-1">Wind: {dayFour[4]}mph</p>
            <p>Humidity: {dayFour[5]}%</p>
          </div>
          <div id="day-5" className="day card col-5 col-lg-2 col-md-4 py-2">
            <p className="fs-4">{dayFive[0]}</p>
            <img className="forecast-icon" src={dayFive[1]} alt={dayFive[2]}/>
            <p className="fs-1 mb-1">{dayFive[3]}°F</p>
            <p className="fs-5">{dayFive[2]}</p>
            <p className="mt-3 mb-1">Wind: {dayFive[4]}mph</p>
            <p>Humidity: {dayFive[5]}%</p>
          </div>
        </div>
      </div>
      : null
    }
    </>
  )
}

export default WeatherForecast