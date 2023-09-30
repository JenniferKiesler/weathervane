import React, {useState} from 'react';

const SearchForm = ({ getCurrentWeather, getForecast }) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let cityInput = inputValue.toLowerCase();
      let individualWords = cityInput.split(" ")
  
      for (let i = 0; i < individualWords.length; i++) {
        individualWords[i] = individualWords[i][0].toUpperCase() + individualWords[i].substring(1);
      }
  
      cityInput = individualWords.join(" ")
      setInputValue(cityInput)

      getCurrentWeather(cityInput)
      getForecast(cityInput)
      setInputValue("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form id="search-form" className="text-center" onSubmit={handleSubmit}>
      <label htmlFor="search-input" className="form-label">Search for a City:</label>
      <input 
        type="search" 
        id="search-input"
        className="form-control mx-auto"
        name='search'
        value={inputValue}
        onChange={handleChange}/>
      <button type="submit" id="search-button" className="btn col-3 my-2">Search</button>
    </form>
  )
}

export default SearchForm