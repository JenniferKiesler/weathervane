import React, {useState, useEffect} from 'react';

const SearchHistory = ({cities, getCurrentWeather, getForecast, isLoading}) => {
  return (
    <div className='text-center dropdown-center'>
      <button className="btn saved-city dropdown-toggle mx-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Search History
      </button>
      <ul className='dropdown-menu py-0'>
        {cities.map(city => (
          <button key={city} type="button" className={!isLoading ? "btn dropdown-item border-bottom col-4 col-sm-2 mx-auto text-center saved-city" : "btn dropdown-item border-bottom col-4 col-sm-2 mx-auto text-center saved-city disabled"} onClick={() => {getCurrentWeather(city); getForecast(city)}}>{city}</button>
        ))}
      </ul>
    </div>
  )
}

export default SearchHistory