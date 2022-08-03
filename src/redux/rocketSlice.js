import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncRockets = createAsyncThunk(
  "allRockets/fetchAsyncRockets",
  async () => {
    const rocketData = await axios.get("https://api.spacexdata.com/v3/rockets");
    return rocketData.data;
  }
);

export const fetchAsyncMissions = createAsyncThunk(
  "allRockets/fetchAsyncMissions",
  async () => {
    const missionsData = await axios.get(
      "https://api.spacexdata.com/v3/missions"
    );
    return missionsData.data;
  }
);

const initialState = {
  rockets: {},
  missions: [],
};

const rocketSlice = createSlice({
  name: "allRockets",
  initialState,
  reducers: {
    addRockets: (state, { payload }) => {
      state.rockets = payload;
    },
    toggleReservation: (state, { payload }) => {
      const id = payload;
      const prevState = state.rockets[id];
      const previouslyReserved = prevState.isReserved;
      state.rockets[id] = { ...prevState, isReserved: !previouslyReserved };
      return state;
    },
  },
  extraReducers: {
    [fetchAsyncRockets.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncRockets.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, rockets: payload };
    },
    [fetchAsyncRockets.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMissions.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, missions: payload };
    },
  },
});

export const { addRockets, toggleReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
export const getAllRockets = (state) => state.allRockets.rockets;
export const getAllMissions = (state) => state.allRockets.missions;
