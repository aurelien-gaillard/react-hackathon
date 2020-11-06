import React, { useEffect, useState } from 'react'
import './searchbar.css'

const SearchBar = ({
  setFlyFrom,
  setFlyTo,
  setIsDirectFlight,
  findLocationFrom,
  findLocationTo,
}) => {
  const [from, setFrom] = useState('PRG')
  const [to, setTo] = useState('VLC')
  const [isDirect, setIsDirect] = useState(false)
  const [valueFrom, setValueFrom] = useState('')
  const [valueTo, setValueTo] = useState('')
  const [isDirectSearch, setIsDirectSearch] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFlyFrom(from)
    setFlyTo(to)
    setIsDirectFlight(isDirect)
  }

  const handleSearchForm = (e) => {
    e.preventDefault()
    findLocationFrom(valueFrom)
    findLocationTo(valueTo)
    setIsDirectFlight(isDirectSearch)
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

      <form onSubmit={handleSubmit}>
        <label htmlFor='from' className='input'>
          From :
          <select name='from' onChange={(e) => setFrom(e.target.value)}>
            <option value='PRG'>Prague</option>
            <option value='TXL'>Berlin</option>
            <option value='WAW'>Warsaw</option>
            <option value='PED'>Pardubice</option>
          </select>
        </label>
        <label htmlFor='to' className='input'>
          To :
          <select name='to' onChange={(e) => setTo(e.target.value)}>
            <option value='VLC'>Valencia</option>
            <option value='BCN'>Barcelona</option>
            <option value='MAD'>Madrid</option>
            <option value='MXP'>Milano</option>
            <option value='ATH'>Athens</option>
            <option value='LGW'>London</option>
          </select>
        </label>
        <label htmlFor='directFlight'>Direct Flight only</label>
        <input
          name='directFlight'
          type='checkbox'
          checked={isDirect}
          onChange={() => setIsDirect(!isDirect)}
        />
        <button type='submit'>Search for flights</button>
      </form>
    </div>
  )
}

export default SearchBar
