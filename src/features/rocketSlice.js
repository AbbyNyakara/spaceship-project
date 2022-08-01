import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAsyncRockets = createAsyncThunk('allRockets/fetchAsyncRockets', async() => {
  const rocketData = await axios.get('https://api.spacexdata.com/v3/rockets');
  return await(rocketData.data)
})

const initialState = {
  rockets: {}
}

const rocketSlice = createSlice({
  name: 'allRockets',
  initialState, 
  reducers: {
    addRockets: (state, {payload}) => {
      return state.rockets = payload;
    },
  },
  extraReducers: {
    [fetchAsyncRockets.pending]: () => {
      console.log("pending")
    },
    [fetchAsyncRockets.fulfilled]: (state, {payload}) => {
      console.log("Fulfilled");
      return {...state, rockets: payload}
    },
    [fetchAsyncRockets.rejected]: () => {
      console.log("Rejected");
    }
  }
})

export const addRockets = rocketSlice.actions
export default rocketSlice.reducer;
export const getAllRockets = (state) => state.allRockets.rockets