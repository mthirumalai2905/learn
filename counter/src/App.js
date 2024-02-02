import React,{useState} from 'react'
import './App.css'
const App = () => {
  const[Counter, setCounter] = useState(0);

  const handleCount = () =>{
    setCounter(Counter + 2);

    if(Counter === 50){
      alert("You have reached 50");
    }
  }
  return (
    <div className='container'>
    <p>{Counter}</p>
      <button className='button' onClick={handleCount}>Count</button>
      <div className='loader'></div>
      
    </div>
  )
}

export default App
