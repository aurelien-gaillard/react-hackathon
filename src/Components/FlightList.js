import React from 'react'

const FlightList = ({searchData}) => {

    return (
        <div>
            {searchData && searchData.map((flight) => {
                const { cityFrom, cityTo, dTime, aTime, fly_duration, price } = flight;
                return (
                <div className="fligh-post">
                    <h3>From: {cityFrom}</h3>
                        <h3>To: {cityTo}</h3>
                        <h4>Departure time: {dTime}</h4>
                        <h4>Arrival time: {aTime}</h4>
                        <h4>Fly duration: {fly_duration}</h4>
                        <h4>Price: {price} €</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default FlightList;
