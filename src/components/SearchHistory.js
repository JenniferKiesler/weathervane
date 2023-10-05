import React, {useState, useEffect} from 'react';

const SearchHistory = ({cities, getCurrentWeather, getForecast, isLoading}) => {
  return (
    <ul className='list-group'>
      {cities.map(city => (
        <button key={city} type="button" className={!isLoading ? "btn col-4 col-sm-2 mx-auto text-center mb-2 saved-city" : "btn col-4 col-sm-2 mx-auto text-center mb-2 saved-city disabled"} onClick={() => {getCurrentWeather(city); getForecast(city)}}>{city}</button>
      ))}
    </ul>
  )
}

export default SearchHistory