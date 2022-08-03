import React from "react";
import { useSelector } from "react-redux";
import { getAllRockets, toggleReservation } from "../../redux/rocketSlice";
import "./RocketListing.scss";
import { useDispatch } from "react-redux";

function RocketListing({ rockets }) {
  const dispatch = useDispatch();
  // we need state info and we need to modify state
  const allRocketsMap = useSelector(getAllRockets);

  function handleClick(rocketId) {
    dispatch(toggleReservation(rocketId));
  }

  const displayRockets =
    rockets != null ? (
      rockets.map((rocket) => {
        return (
          <div className="rocket_listing" key={rocket.id}>
            <div>
              <img
                src={rocket.flickr_images[0]}
                alt="Rocket 1"
                className="rocket_image"
              />
            </div>

            <div className="rocket_details">
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.description}</p>
              <button
                onClick={() => {
                  handleClick(rocket.id);
                }}
                className="reserve_rocket"
              >
                {allRocketsMap[rocket.id]?.isReserved
                  ? "Reserved"
                  : "Reserve Rocket"}
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>loading...</p>
    );

  return <div>{displayRockets}</div>;
}

export default RocketListing;
