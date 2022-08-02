import React from 'react'
import { useSelector } from 'react-redux';
import { getAllRockets } from '../../features/rocketSlice'
import './RocketListing.scss'

function RocketListing() {

  const rockets = useSelector(getAllRockets)
  console.log(rockets)

  const displayRockets = rockets.map((rocket) => {
    return (
      <div className='rocket_listing' key={rocket.id}>
        <div>
            <img src={rocket.flickr_images[0]} alt="Rocket 1" className='rocket_image'/>
        </div>

        <div className='rocket_details'>
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          <button className='reserve_rocket'>Reserve Rocket</button>
        </div>
      </div>
    )
  })


  return (
    <div>{displayRockets}</div>
  )
}

export default RocketListing