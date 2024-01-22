import { Button } from 'bootstrap'
import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

// import './styles.css'

function Timer() {
  const [state, setState] = useState('Active')
  const [count, setCount] = useState(0)
  const [remaining, setRemaining] = useState(0)
const x = 100
  const onIdle = () => {
    setState(`Well done, you're reading`)
  }

  const onActive = () => {
    setState('it seems you got distracted ')
  }

  const onAction = () => {
    setCount(count + 1)
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 10000000,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })
  const handleStartClick = () => {
    start();
  };
  return (
    <>
    
    
    startManually
        <h1>lets not get distracted </h1>
        const{start}
        <button onClick={handleStartClick}></button>
        <br />
        <p>Current State: {state}</p>
        <p>Action Events: {count}</p>
        <p>{remaining} seconds remaining</p>
      
    </>
  )
}


export default Timer