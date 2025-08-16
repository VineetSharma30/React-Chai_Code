import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = ()=>{
    console.log(counter)
    // counter++
    setCounter(counter+1)

  }

  const removeValue = ()=>{
    console.log(counter)
    // counter--
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
