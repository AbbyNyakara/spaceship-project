import React from 'react'
import { displayReserved } from "../../redux/Missions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";


function Profile(props) {
  const dispatch = useDispatch();
  const reservedList = dispatch(displayReserved());

  return (
    <div>
      <h3>My Missions</h3>
      <ul>
        {reservedList.forEach((mission) => {
          return <li>{mission.mission_name}</li>
        })
        }
      </ul>
    </div>
  )
}

export default Profile