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
      const Reserved = state.filter((mission) => {
        return action.payload.mission_id === mission.missions_id
      })
      return Reserved
    },
    displayReserved(state, action) {
      const reservedList = state.filter((mission) => {
        return mission.reserved === true
      })
      return console.log(reservedList)
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
