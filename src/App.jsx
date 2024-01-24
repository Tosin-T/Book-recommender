import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
// import Logo from './components/Logo/Logo';
// import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
// import Randomiser from './Pages/Randomiser';
import Saved from './Pages/Saved';
import Timer from './Pages/Timer';
// import Search from './Pages/Search';


function App() {
  return (
    <Router>
      <Wrapper> 
        <Navbar />
         
        <Routes>
            {/* <Logo /> */}  
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="saved" element={<Saved />} />
            {/* /* <Route path="/search" element={<Search />} /> */}
              {/* <Route path="/randomiser" element={<Randomiser />} /> */}
              <Route path="/timer" element={<Timer />} /> */
        </Routes>
            
      </Wrapper>  
    </Router>
  )


}

export default App;
