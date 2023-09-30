const WeatherForecast = ({ forecast }) => {
  console.log(forecast)
  return (
    <>
    {forecast.length != 0 ?
      <div>
        <h3 id="five-day" className="text-center mt-3 fw-bold">5-Day Forecast</h3>
        <div id="day-1" className="day"></div>
        <div id="day-2" className="day"></div>
        <div id="day-3" className="day"></div>
        <div id="day-4" className="day"></div>
        <div id="day-5" className="day"></div>
      </div>
      : null
    }
    </>
  )
}

export default WeatherForecast