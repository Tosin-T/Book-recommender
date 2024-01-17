import { useState } from 'react'
import './App.css'
import About from './components/About';
// import Home from './components/Home';
import Navbar from './components/Navbar';
// import Randomiser from './components/Randomiser';
// import Saved from './components/Saved';
// import Timer from './components/Timer';




function App() {
  return ( 
    <div>
        {/* <Home/> */}
  <About/>
  <Navbar/>
  {/* // <Randomiser/>
  // <Saved/>
  // <Timer/>  */}
    </div>
  )
 

}

export default App
