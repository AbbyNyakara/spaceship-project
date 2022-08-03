import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Missions from './components/Missions';
import Rockets from './components/rockets/Rockets';
import Profile from './components/profile/Profile';
import { fetchMissions } from './redux/Missions';
import './App.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(fetchMissions());
  }, [dispatch]);
  
  return (
    <div>
    <Router>
    <Header />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Rockets />}/>
        <Route path="/missions" element={<Missions />}></Route>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
