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
  },
});

export const { getMissions, joinMission } = slice.actions;

export default slice.reducer;

export const fetchMissions = () => async (dispatch) => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        dispatch(getMissions(data))
    })
}
