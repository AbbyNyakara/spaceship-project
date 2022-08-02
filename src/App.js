import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import './App.css';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Rockets />}/>
        <Route path='/missions' element={<Missions />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App