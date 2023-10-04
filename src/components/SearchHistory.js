import React, {useState, useEffect} from 'react';

const SearchHistory = ({cities}) => {
  console.log(cities)
  const [cityHistory, setCityHistory] = useState(cities)

  return (
    <ul className='list-group'></ul>
  )
}

export default SearchHistory