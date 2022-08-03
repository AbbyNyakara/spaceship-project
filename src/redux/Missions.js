import { createSlice } from '@reduxjs/toolkit';
const URL = 'https://api.spacexdata.com/v3/missions';

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    getMissions(state, action) {
      return action.payload;
    },
    joinMission(state, action) {
      state = state.map(mission=>{
        if (mission.mission_id === action.payload) {
          mission.reserved ? mission.reserved=false : mission.reserved = true;
          return mission;
        }
        else
          return mission;
      })
    },
  },
});

export const { getMissions, joinMission, displayReserved } = slice.actions;

export default slice.reducer;

export const fetchMissions = () => async (dispatch) => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        dispatch(getMissions(data))
    })
}
