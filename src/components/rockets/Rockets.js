import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRockets } from "../../redux/rocketSlice";
import RocketListing from "../rocketListing/RocketListing";
import axios from "axios";

function Rockets() {
  const dispatch = useDispatch();
  const [rockets, setRockets] = useState(null);

  useEffect(() => {
    async function fetchDataAndSetReduxState() {
      const rocketData = await axios.get(
        "https://api.spacexdata.com/v3/rockets"
      );
      setRockets(rocketData.data);
      // only add stateful info to redux store
      const idToRocketMap = {}
      rocketData.data.forEach((rocket) => {
        idToRocketMap[rocket.id] = { name: rocket.rocket_name, isReserved: false };
      });
      dispatch(addRockets(idToRocketMap));
    }
    fetchDataAndSetReduxState();
  }, []);

  return (
    <div>
      <RocketListing rockets={rockets} />
    </div>
  );
}

export default Rockets;
