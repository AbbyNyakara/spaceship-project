import React from 'react';
import './Profile.scss';

function Profile() {
  return (
    <div className='profile'>
      <div className="my_missions">
        <h2 className='header'>My Missions</h2>
        <p className="mission">Telstar</p>
        <p className="mission">Telstar</p>
        <p className="mission">Telstar</p>
      </div>
      <div className="my_rockets">
        <h2 className='header'>My Rockets</h2>
        <p className="rocket">Falcon</p>
        <p className="rocket">Falcon</p>
        <p className="rocket">Falcon</p>
      </div>
    </div>
  )
}

export default Profile