import { useState, useCallback } from 'react'
import './App.css'

function App() {
   
  const [user, setUser] = useState(10);
  function abc(){
    setUser(30)
  }

  return (
    <>
      {/* <div>
         <h1>hello</h1>
         <button onClick={abc}>click me</button>
      </div> */}
      <div>
        <h1>username is {user}</h1>
        <button onClick={abc}>click me to change user</button>
      </div>
    </>
  )
}

export default App
