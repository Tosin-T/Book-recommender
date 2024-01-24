import { Button } from 'bootstrap'
import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';


// import './styles.css'

const Timer = () => {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [customTimeMinutes, setCustomTimeMinutes] = useState(5); // Default custom time is 5 minutes
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
  return (
      <div className="timer-container">
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
          </div>
          {isTimerRunning && (
              <Countdown
                  date={Date.now() + customTimeMinutes * 60 * 1000} // Convert minutes to milliseconds
                  onComplete={handleFinish}
                  renderer={({ minutes, seconds, completed }) => (
                      <div className="countdown">{`${minutes}:${seconds}`}</div>
                  )}
              />
          )}
      </div>
  );
};


export default Timer