import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { getAllMissions } from '../../redux/rocketSlice'
=======
import { getAllMissions } from '../../features/rocketSlice'
>>>>>>> develop
import './MissionListing.scss'

function MissionListing() {

  const missions = useSelector(getAllMissions)
  console.log(missions)

  const displayMissions = missions.map((mission) => {
    return (
      <tr className='mission_listing' key={mission.mission_id} >
            <td style={{width: 100}} className="mission_title">{mission.mission_name}</td>
            <td style={{width: 850}}>{mission.description}</td>
            <td>
              <button className='status_button'>Not a member</button>
            </td>
            <td>
              <button className='join_button'>Join a mission</button>
            </td>
      </tr>
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
          {displayMissions}
        </tbody>
      </table>
    </div>
  )
}

export default MissionListing