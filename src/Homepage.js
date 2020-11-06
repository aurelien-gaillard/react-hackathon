import React, { useState, useEffect } from 'react'
import FlightList from './Components/FlightList'
import SearchBar from './Components/SearchBar'

const Homepage = () => {
  const [flyFrom, setFlyFrom] = useState('PRG')
  const [flyTo, setFlyTo] = useState('LGW')
  const [isDirectFlight, setIsDirectFlight] = useState(false)
  const [searchData, setSearchData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0);

  const url = `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=18/11/2020&dateTo=1/12/2020&partner=picky&v=3&limit=30${
    isDirectFlight ? '&max_stopovers=0' : ''
  }`

  useEffect(() => {
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
        console.log(currentPage);
    }

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
        />
        <h4>No flights found from this search</h4>
      </div>
    )
    }

  console.log(searchData.length)
  return (
    <div className='container'>
      <SearchBar
        setFlyTo={setFlyTo}
        setFlyFrom={setFlyFrom}
        setIsDirectFlight={setIsDirectFlight}
          />
          {(currentPage !== 0) && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>}
          {(searchData.length > currentPage*5 + 5) && <button onClick={() =>  handleNextPage() }>Next page</button> }
          
      <FlightList searchData={searchData.slice(currentPage*5, currentPage*5+5)} />
      </div>
  )
}

export default Homepage
