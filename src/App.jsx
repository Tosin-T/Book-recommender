import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactDOM } from 'react';
import './App.css'
// import Logo from './components/Logo/Logo';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
// import Randomiser from './Pages/Randomiser';
import Saved from './Pages/Saved';
// import Timer from './Pages/Timer';
// import Search from './Pages/Search';


function App() {
  return (
    <Router>
      
        {/* <Logo /> */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="saved" element={<Saved />} />
          {/* <Route path="/search" element={<Search />} />
            <Route path="/randomiser" element={<Randomiser />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/timer" element={<Timer />} /> */}
        </Routes>

      
    </Router>
  )


}

export default App
