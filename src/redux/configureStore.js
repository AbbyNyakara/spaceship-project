import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions';
import rocketsReducer from './rocketSlice'

const store = configureStore({
  reducer: {
    allRockets: rocketsReducer,
    missions: missionReducer,
  }
});

export default store;
