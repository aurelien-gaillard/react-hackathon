import React, { useEffect, useState } from 'react'
import './searchbar.css'

const SearchBar = ({ findLocations }) => {
  const [valueFrom, setValueFrom] = useState('')
  const [valueTo, setValueTo] = useState('')
  const [isDirectSearch, setIsDirectSearch] = useState(false)

  const handleSearchForm = (e) => {
    e.preventDefault()
    findLocations(valueFrom, valueTo)
    setIsDirectSearch(isDirectSearch)
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSearchForm}>
        <label className='input' htmlFor='from'>
          From:
          <input
            type='text'
            name='from'
            value={valueFrom}
            onChange={(e) => setValueFrom(e.target.value)}
          />
        </label>
        <label className='input' htmlFor='to'>
          To:
          <input
            type='text'
            name='to'
            value={valueTo}
            onChange={(e) => setValueTo(e.target.value)}
          />
        </label>
        <label htmlFor='directFlight'>Direct Flight only</label>
        <input
          name='directFlight'
          type='checkbox'
          checked={isDirectSearch}
          onChange={() => setIsDirectSearch(!isDirectSearch)}
        />
        <button>Search for flight</button>
      </form>
    </div>
  )
}

export default SearchBar
