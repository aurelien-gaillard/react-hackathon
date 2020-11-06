import React, { useState, useEffect } from 'react'
import FlightList from './Components/FlightList'
import SearchBar from './Components/SearchBar'
import SelectBar from './Components/SelectBar'
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

  const findLocations = async (from, to) => {
    let url = `https://api.skypicker.com/locations?term=${from}&location_types=airport&limit=1&active_only=true&sort=rank`
    const response = await fetch(url)
    const data = await response.json()
    setCodeFrom(data.locations[0].id)

    url = `https://api.skypicker.com/locations?term=${to}&location_types=airport&limit=10&active_only=true&sort=name`

    const response2 = await fetch(url)
    const data2 = await response2.json()
    setCodeTo(data2.locations[0].id)
  }

  useEffect(() => {
    console.log('hi')
    setFlyFrom(codeFrom)
    setFlyTo(codeTo)
    //setIsDirectFlight(isDirect)
  }, [codeFrom, codeTo])

  return (
    <div className='container'>
      <Navbar />
      <main>
        <h1>Plan tomorrow's adventure today</h1>
        <h4>Search the safest destinations. Book with flexibility</h4>
        <SearchBar
          setIsDirectFlight={setIsDirectFlight}
          findLocations={findLocations}
        />
        <SelectBar
          setFlyTo={setFlyTo}
          setFlyFrom={setFlyFrom}
          setIsDirectFlight={setIsDirectFlight}
        />
      </main>

      {isLoading ? (
        <h4>Loading...</h4>
      ) : searchData.length === 0 ? (
        <h4>No flights found from this search</h4>
      ) : (
        <div className='pagination-btns'>
          {currentPage !== 0 && (
            <button
              className='pagination-btn'
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous page
            </button>
          )}
          {searchData.length > currentPage * 5 + 5 && (
            <button className='pagination-btn' onClick={() => handleNextPage()}>
              Next page
            </button>
          )}
          <FlightList
            searchData={searchData.slice(currentPage * 5, currentPage * 5 + 5)}
          />
        </div>
      )}
    </div>
  )
}

export default Homepage
