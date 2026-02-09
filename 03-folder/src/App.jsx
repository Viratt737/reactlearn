import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setcounter] = useState(5)
  // let counter = 5
  const addValue = () =>{
    setcounter(counter + 1)
    console.log(counter);

  }

  // let [removecounter, setremovecounter] = useState(5)
  const removeValue =() =>{
    setcounter(counter-1)
    console.log(counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button
       onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      > remove value</button>
    </>
  )
}

export default App
