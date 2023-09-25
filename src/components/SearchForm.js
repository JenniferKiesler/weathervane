import React, {useState} from 'react';

const SearchForm = ({ getCurrentWeather }) => {
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
      setInputValue("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search for a City:</label>
      <input 
        type="search" 
        id="search-input"
        name='search'
        value={inputValue}
        onChange={handleChange}/>
      <button type="submit" id="search-button">Search</button>
    </form>
  )
}

export default SearchForm