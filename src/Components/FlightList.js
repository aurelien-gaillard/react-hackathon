import React from 'react'
import { DateTime } from 'luxon'

const FlightList = ({ searchData }) => {
  return (
    <div>
      {searchData &&
        searchData.map((flight) => {
          const { cityFrom, cityTo, dTime, aTime, fly_duration, price, route } = flight
          return (
            <div key={flight.id} className='fligh-post'>
              <h3>From: {cityFrom}</h3>
              <h3>To: {cityTo}</h3>
              <h4>
                Departure date:{' '}
                {DateTime.fromMillis(dTime * 1000).toFormat('dd LLL yyyy')}
              </h4>
              <h4>
                Departure time:{' '}
                {DateTime.fromMillis(dTime * 1000).toFormat('hh:mm')}
              </h4>
              <h4>
                Arrival date:{' '}
                {DateTime.fromMillis(aTime * 1000).toFormat('dd LLL yyyy')}
              </h4>
              <h4>
                Arrival time:{' '}
                {DateTime.fromMillis(aTime * 1000).toFormat('hh:mm')}
              </h4>
              <h4>Fly duration: {fly_duration}</h4>
                  <h4>Price: {price} €</h4>
                  <h4>Stopovers: {route.length -1 }</h4>
            </div>
          )
        })}
    </div>
  )
}

export default FlightList
