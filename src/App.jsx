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
        <Routes>
          <Route className="page" path="*" element={<HomePage />} />
          <Route className="page" path="/saved" element={<Saved />} />
          <Route className="page" path="/timer" element={<TimerPage />} />
          <Route className="page" path="/search" element={<SearchPage />} />
          <Route className="page" path="/aboutpage" element={<Aboutpage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  )


}

export default App;
