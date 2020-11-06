import React, { useState, useEffect } from 'react'
import FlightList from './Components/FlightList'
import SearchBar from './Components/SearchBar'
import './homepage.css'
import Navbar from './Components/Navbar'

const Homepage = () => {
  const [flyFrom, setFlyFrom] = useState('PRG')
  const [flyTo, setFlyTo] = useState('LGW')
  const [isDirectFlight, setIsDirectFlight] = useState(false)
  const [searchData, setSearchData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [codeFrom, setCodeFrom] = useState('')
  const [codeTo, setCodeTo] = useState('')

  const url = `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=18/11/2020&dateTo=1/12/2020&partner=picky&v=3&limit=30${
    isDirectFlight ? '&max_stopovers=0' : ''
  }`

  useEffect(() => {
    console.log('hello')
    setSearchData([])
    fetchData()
  }, [flyFrom, flyTo, isDirectFlight])

  const fetchData = async () => {
    setIsLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setSearchData(data.data)
    setIsLoading(false)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
    console.log(currentPage)
  }

  const findLocationFrom = async (location) => {
    const url = `https://api.skypicker.com/locations?term=${location}&location_types=airport&limit=1&active_only=true&sort=rank`

    const response = await fetch(url)
    const data = await response.json()
    setCodeFrom(data.locations[0].id)
  }
  const findLocationTo = async (location) => {
    const url = `https://api.skypicker.com/locations?term=${location}&location_types=airport&limit=10&active_only=true&sort=name`

    const response = await fetch(url)
    const data = await response.json()
    setCodeTo(data.locations[0].id)
  }

  useEffect(() => {
    console.log('hi')
    setFlyFrom(codeFrom)
    setFlyTo(codeTo)
    //setIsDirectFlight(isDirect)
  }, [codeFrom, codeTo, isDirectFlight])
  console.log(flyTo)
  console.log(flyFrom)

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  if (searchData.length === 0) {
    return (
      <div>
        <SearchBar
          setFlyTo={setFlyTo}
          setFlyFrom={setFlyFrom}
          setIsDirectFlight={setIsDirectFlight}
          findLocationFrom={findLocationFrom}
          findLocationTo={findLocationTo}
        />
        <h4>No flights found from this search</h4>
      </div>
    )
  }

  return (
    <div className='container'>
      <Navbar />
      <main>
        <h1>Plan tomorrow's adventure today</h1>
        <h4>Search the safest destinations. Book with flexibility</h4>
        <SearchBar
          setFlyTo={setFlyTo}
          setFlyFrom={setFlyFrom}
          setIsDirectFlight={setIsDirectFlight}
          findLocationFrom={findLocationFrom}
          findLocationTo={findLocationTo}
        />
      </main>
      <div className="pagination-btns">
          {currentPage !== 0 && (
            <button className='pagination-btn' onClick={() => setCurrentPage(currentPage - 1)}>
              Previous page
            </button>
          )}
          {searchData.length > currentPage * 5 + 5 && (
            <button className='pagination-btn' onClick={() => handleNextPage()}>Next page</button>
          )}
      </div>
      <FlightList
        searchData={searchData.slice(currentPage * 5, currentPage * 5 + 5)}
      />
    </div>
  )
}

export default Homepage
