import { Button } from 'bootstrap'
import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import React from 'react';
// import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './style.css'
// test
const TimerFunction = () => {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [customTimeMinutes, setCustomTimeMinutes] = useState(5); // Default custom time is 5 minutes
  const [state, setState] = useState("It seems like you got distracted- lets take a 5 seconds and go again")
  const [count, setCount]= useState(0)
  const [remaining, setRemaining]= useState(0)
  const handleStart = () => {
      setTimerRunning(true);
  };
  const handleFinish = () => {
      setTimerRunning(false);
      // You can perform any action when the timer finishes
      console.log('Timer finished!');
  };
  const handleCustomTimeChange = (event) => {
      setCustomTimeMinutes(event.target.value);
    
  };
const onIdle = ()=>{
    setState("Keep up the good work you're on your way to reaching your reading Goal")
}
const onActive =()=>{
    setState("It seems like you got distracted- lets take a 5 seconds and go again")
}
const onAction = () =>{
setCount(count+1)
}
const {getRemainingTime}=useIdleTimer({

    onIdle,
    onActive,
    onAction,
    timeout: 5_000,
})

useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)
    return () => {
        clearInterval(interval)
      }
    })
  
  return (
      <div className="timer-container, mom">
          <h2 className="timer-title">Reading Timer</h2>
          <button onClick={handleStart} disabled={isTimerRunning} className="timer-button">
              Start
          </button>
          
          <button onClick={handleFinish} disabled={!isTimerRunning} className="timer-button">
              Finish
          </button>
          <div className="custom-time-container">
              <input
                  type="number"
                  value={customTimeMinutes}
                  onChange={handleCustomTimeChange}
                  placeholder="Custom Time (minutes)"
              />
              <p>{state}</p>
              
              <p>lets count you in {remaining}</p>
          </div>
        
          {isTimerRunning && (
              <Countdown
              
                  date={Date.now() + customTimeMinutes * 60 * 1000} // Convert minutes to milliseconds
                  onComplete={handleFinish}
                  renderer={({ minutes, seconds, completed, }) => (
                      <div className="countdown">{`${minutes}:${seconds}`}</div>
                  )}
              />
          )}
      </div>
  );
};


export default TimerFunction