import { useCallback, useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passGen = useCallback(()=>{
      let pass= ""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numAllowed) str+="0123456789"
      if(charAllowed) str+=`!@#$%^&*(){}[]|_-=?~`
      for (let i = 0; i < length; i++) {
        let char = (Math.random())*(str.length+1)
        pass += str.charAt(char)
      }

      setPassword(pass)
      
  },[length,numAllowed,charAllowed,setPassword])

  useEffect(() => {passGen()},[length,numAllowed,charAllowed,passGen])
  
  const passRef = useRef(null)

  const copyPassToClipboard = useCallback(()=>{
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
    // alert("Copied to Clipboard")
  },[password])

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-3xl text-center text-white py-2'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4  bg-blue-700' >
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white rounded-bl-sm'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button 
          onClick={copyPassToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={25}
            value={length} 
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id='numInput'
            onChange={()=>{
              setNumAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
