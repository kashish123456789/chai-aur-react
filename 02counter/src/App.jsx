import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15
  let [counter, kkCounter] = useState(15)

  const addValue = () =>{
    //console.log("clicked", counter); 
    //counter = counter + 1 
    kkCounter(counter +1)
  }
  const removeValue = ()=> {
    kkCounter(counter-1)
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value{counter}</button>
     <br/>
     <button onClick={removeValue}>remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
