import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMissions } from '../../redux/rocketSlice';
import MissionListing from '../missionListing/MissionListing';

function Missions() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMissions())
  }, [dispatch])

  return (
    <div><MissionListing /></div>
  )
}

export default Missions