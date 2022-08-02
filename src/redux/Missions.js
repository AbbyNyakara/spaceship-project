import { createSlice } from '@reduxjs/toolkit';
const URL = 'https://api.spacexdata.com/v3/missions';

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    getMissions(state, action) {
      return action.payload;
    },
  },
});

export const { getMissions } = slice.actions;

export default slice.reducer;

export const fetchMissions = () => async (dispatch) => {
    await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        dispatch(getMissions(data))
    })
}
