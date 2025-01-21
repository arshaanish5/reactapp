import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Task from './components/Task'
import { Route, Routes } from 'react-router-dom'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Register user={{name:'Rahul',email:'rahul@g.c'}}/>
   
    {/* <Home/> */}
    {/* <Task/> */}
    </>
  );
}

export default App
