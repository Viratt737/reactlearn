import { useState, useCallback } from 'react'
import './App.css'

function App() {
   
  const [num, setNum] = useState(0);

  return (
    <>
      {/* <div>
         <h1>hello</h1>
         <button onClick={abc}>click me</button>
      </div> */}
      {/* <div>
        <h1>username is {user}</h1>
        <button onClick={abc}>click me to change user</button>
      </div> */}

      <div>
        <h1>Number is {num}</h1>
        <button onClick={() => setNum(num+1)}>count plus</button>
        <button onClick={() => setNum(num-1)}>count sub</button>
      </div>
    </>
  )
}

export default App
