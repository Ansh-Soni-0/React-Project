import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time , setTime] = useState(0);
  const [running , setRunning] = useState(false);


  // useEffect(() => {
  //   const clockWatch = () => {
  //     let interval;
  //     if(running){
  //       interval = setInterval(() => {
  //         setTime((prevTime) => prevTime + 10);
  //       } , 10);
  //     } else if(!running){
  //       clearInterval(interval);
  //     }
  //   }
  //   clockWatch();
  // } , [running])

  useEffect(() => {
    let interval;
      if(running){
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        } , 10);
      } else if(!running){
        clearInterval(interval);
      }

      return () => clearInterval(interval)
    }, [running]);
  
    
   
  

  return (
    <>
    <div className='stop-watch'>

      <div className="watch">

          <h1>stop watch</h1>
          <div className='watch-calc'>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>

          <div  className='btn'>
            {/* {running ? (
              <button onClick={() => {setRunning(false)}}>Stop</button>
            ) : (
              <button onClick={() => {setRunning(true)}}>Start</button>
            )} */}

            <button
            className='stop-start'
            onClick={() => setRunning(!running)}>
              {running ? "stop" : "start"}
            </button>
          
            <button 
            className='reset'
            onClick={() => {setTime(0)}}>Reset</button>
          </div>

      </div>
      
    </div>
    </>
  )
}

export default App
