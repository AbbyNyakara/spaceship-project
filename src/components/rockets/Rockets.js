import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncRockets } from '../../redux/rocketSlice';
import RocketListing from '../rocketListing/RocketListing';
import axios from "axios";


function Rockets() {

  const dispatch = useDispatch()
  const [rockets, setRockets] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const rocketData = await axios.get(
        "https://api.spacexdata.com/v3/rockets"
      );
      console.log(rocketData.data)
      setRockets(rocketData.data);
    }
    fetchData()
    // dispatch(fetchAsyncRockets())
  }, [dispatch])

  return (
    <div>
      <RocketListing rockets={rockets} />
    </div>
  )
}

export default Rockets