import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Aboutpage from './Pages/Aboutpage';
import SearchPage from './Pages/SearchPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Saved from './Pages/Saved';
import TimerPage from './Pages/Timer';
import HomePage from './Pages/HomePage/Homepage';




function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes className='pages'>
          <Route path="*" element={<HomePage />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  )


}

export default App;