import './App.css'
import { useState } from 'react'

function App() {
  
  const[count, setcount] = useState(0)

  const increaseCount = () =>{
    if(count < 100){
      setcount(count+1)
    }
  }

  return (
    <>
    <div>
      {/* <button onClick={() => setcount(count+1)}>count {count}</button> */}
      <button onClick={increaseCount}>count {count}</button>
    </div>
    </>
  )
}

export default App
