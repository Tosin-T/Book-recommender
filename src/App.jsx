import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Logo from './components/Logo/Logo';
import Home from './Pages/Home';

import SearchPage from './Pages/SearchPage';
import Navbar from './components/Navbar/Navbar';
import Randomiser from './Pages/Randomiser';
import Saved from './Pages/Saved';
import TimerPage from './Pages/TimerPage';




function App() {
  return (
    <Router>
      <Wrapper> 
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/randomiser" element={<Randomiser />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/timer" element={<TimerPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
            
      </Wrapper>  
    </Router>
  )


}

export default App;
