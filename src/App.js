import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import MyProfile from './components/Myprofile';
import Rockets from './components/Rockets';
import { fetchMissions } from './redux/Missions';

function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(fetchMissions());
  }, []);
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Rockets />}></Route>
        <Route path="/missions" element={<Missions MissionList={state.missions}/>}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
