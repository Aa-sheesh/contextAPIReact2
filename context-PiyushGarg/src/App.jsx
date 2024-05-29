import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterBtn from './components/CounterBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='hover:underline hover:decoration-dashed m-2'>
        Count is : {count} <br/>
      </h1>
        <CounterBtn/>
        <CounterBtn/>
        <CounterBtn/>
        <CounterBtn/>
      
    </>
  )
}

export default App
