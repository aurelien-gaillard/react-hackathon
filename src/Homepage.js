import React, { useState, useEffect } from 'react';
import FlightList from './Components/FlightList';



const Homepage = () => {

    const [flyFrom, setFlyFrom] = useState('PRG');
    const [flyTo, setFlyTo] = useState('LGW');
    const [searchData, setSearchData] = useState([]);

    const url = `https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3&limit=5`

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data);
        setSearchData(data.data)
    }
    
    return (
        <div className="flight-container">
            <FlightList searchData={searchData}/>
        </div>
    )
}

export default Homepage

