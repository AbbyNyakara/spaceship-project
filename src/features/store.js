import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from './rocketSlice'

const store = configureStore({
  reducer: {
    allRockets: rocketsReducer
  }
})

export default store;