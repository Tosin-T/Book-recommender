import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Logo from './components/Logo/Logo';


import SearchPage from './Pages/SearchPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Randomiser from './Pages/Randomiser';
import Saved from './Pages/Saved';
import Timer from './Pages/Timer';




function App() {
  return (
    <Router>
      <Wrapper> 
        <Navbar />
        <Routes className='pages'>
          <Route path="*" element={<Homepage />} />
          <Route path="/randomiser" element={<Randomiser />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/timer" element={<Timer />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
            
      </Wrapper>  
      <Footer/>
    </Router>
  )


}

export default App;
