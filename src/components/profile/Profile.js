import React from 'react'
import { useSelector } from "react-redux";


function Profile() {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      <h3>My Missions</h3>
      <ul>
        {missions.filter((mission=>mission.reserved === true)).map((mission) => {
          return <li key={mission.mission_id}>{mission.mission_name}</li>
        })
        }
      </ul>
    </div>
  )
}

export default Profile