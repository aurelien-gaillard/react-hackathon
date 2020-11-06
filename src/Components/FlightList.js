import React from 'react'
import { DateTime } from 'luxon'
import './flightlist.css'

const FlightList = ({ searchData }) => {
  return (
    <div className="flight-list">
      {searchData &&
        searchData.map((flight) => {
          const {
            cityFrom,
            cityTo,
            dTime,
            aTime,
            fly_duration,
            price,
            route,
          } = flight
          return (
            <div key={flight.id} className='flight-post'>
              <div className="flight-cities">
                  <h3>From:<br/> <span>{cityFrom}</span></h3>
                  <h3>To:<br/> <span>{cityTo}</span></h3>
              </div>
              <div className="flight-info">
                  <h6>
                    <strong>Departure date:{' '}</strong>
                    <span>{DateTime.fromMillis(dTime * 1000).toFormat('dd LLL yyyy')}</span>
                  </h6>
                  <h6>
                    <strong>Departure time:{' '}</strong>
                    <span>{DateTime.fromMillis(dTime * 1000).toFormat('hh:mm')}</span>
                  </h6>
                  <h6>
                    <strong>Arrival date:{' '}</strong>
                    <span>{DateTime.fromMillis(aTime * 1000).toFormat('dd LLL yyyy')}</span>
                  </h6>
                  <h6>
                    <strong>Arrival time:{' '}</strong>
                    <span>{DateTime.fromMillis(aTime * 1000).toFormat('hh:mm')}</span>
                  </h6>
                  <h6><strong>Fly duration:</strong> <span>{fly_duration}</span></h6>
                  <h6><strong>Price:</strong> <span>{price} €</span></h6>
                  <h6><strong>Stopovers:</strong> <span>{route.length - 1}</span></h6>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default FlightList
