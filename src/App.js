import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import MyProfile from './components/Myprofile';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Rockets />}></Route>
        <Route path="/missions" element={<Missions />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
