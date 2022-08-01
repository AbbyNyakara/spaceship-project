import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncRockets } from '../features/rocketSlice';
import RocketListing from '../rocketListing/RocketListing';

function Rockets() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncRockets())
  }, [dispatch])
  

  return (
    <div>
      <RocketListing />
    </div>
  )
}

export default Rockets