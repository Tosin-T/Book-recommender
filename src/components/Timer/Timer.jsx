import { Button } from 'bootstrap'
import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import React from 'react';
import Countdown from 'react-countdown';
import './style.css'
const TimerFunction = () => {
    const [isTimerRunning, setTimerRunning] = useState(false);
    const [customTimeMinutes, setCustomTimeMinutes] = useState(10); 
    const [state, setState] = useState(null)
    const [count, setCount] = useState(0)
    const handleStart = () => {
        setTimerRunning(true);
    };
    const handleFinish = () => {
        setTimerRunning(false);
        
        console.log('Timer finished!');
    };
    const handleCustomTimeChange = (event) => {
        setCustomTimeMinutes(event.target.value);

    };
    const onIdle = () => {
        setState("Keep up the good work you're on your way to reaching your reading goal :)")
    }
    const onActive = () => {
        setState("It seems like you got distracted, lets take a few seconds and go again !")
    }
    const onAction = () => {
        setCount(count + 1)
    }
    const { getRemainingTime } = useIdleTimer({
        onIdle,
        onActive,
        onAction,
        timeout: 1_000,
    })

    return (
        <div className="timer-container, mom">
            <h2 className="timer-title">Reading Timer</h2>
            <button onClick={handleStart} disabled={isTimerRunning} className="timer-button-start">
                Start
            </button>
            <button onClick={handleFinish} disabled={!isTimerRunning} className="timer-button-stop">
                Stop
            </button>
            <div className="custom-time-container">
                <input
                    type="number"
                    value={customTimeMinutes}
                    onChange={handleCustomTimeChange}
                    placeholder="Custom Time (minutes)"
                />
                <br></br>

                <p>{state}</p>
                
            </div>
            {isTimerRunning && (
                <Countdown
                    date={Date.now() + customTimeMinutes * 60 * 1000}
                    onComplete={handleFinish}
                    renderer={({ minutes, seconds, }) => (
                        <div className="countdown">{`${minutes}:${seconds}`}</div>
                    )}
                />
            )}
        </div>
    );
};
export default TimerFunction