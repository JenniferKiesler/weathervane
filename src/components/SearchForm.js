import React, {useState} from 'react';

const SearchForm = ({ getCurrentWeather, getForecast, isLoading, setIsLoading }) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      // capitalizes the first letter of each word
      if (inputValue != "") {
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
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form id="search-form" className="text-center container" onSubmit={handleSubmit}>
      <label htmlFor="search-input" className="form-label">Search for a City:</label>
      <input 
        type="search" 
        id="search-input"
        className="form-control mx-auto"
        name='search'
        value={inputValue}
        onChange={handleChange}/>
      <button type="submit" id="search-button" className={!isLoading ? "btn px-4 my-2" : "btn px-4 my-2 disabled"}>Search</button>
    </form>
  )
}

export default SearchForm