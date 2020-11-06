import React, { useState } from 'react'

const SearchBar = ({ setFlyFrom, setFlyTo, setIsDirectFlight }) => {
  const [from, setFrom] = useState('PRG')
  const [to, setTo] = useState('VLC')
  const [isDirect, setIsDirect] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFlyFrom(from)
    setFlyTo(to)
    setIsDirectFlight(isDirect)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='from'>Flight from :</label>
      <select name='from' onChange={(e) => setFrom(e.target.value)}>
        <option value='PRG'>Prague</option>
        <option value='TXL'>Berlin</option>
        <option value='WAW'>Warsaw</option>
        <option value='PED'>Pardubice</option>
      </select>
      <select name='to' onChange={(e) => setTo(e.target.value)}>
        <option value='VLC'>Valencia</option>
        <option value='BCN'>Barcelona</option>
        <option value='MAD'>Madrid</option>
        <option value='MXP'>Milano</option>
        <option value='ATH'>Athens</option>
        <option value='LGW'>London</option>
      </select>
      <label htmlFor='directFlight'>Direct Flight only</label>
      <input
        name='directFlight'
        type='checkbox'
        checked={isDirect}
        onChange={() => setIsDirect(!isDirect)}
      />

      <button type='submit'>Search for flights</button>
    </form>
  )
}

export default SearchBar
