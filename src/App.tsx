import React, { useContext, useEffect } from 'react'
import './App.css'
import { AppContext } from './context/context'
import { Home } from './pages/home'

function App() {
  const context = useContext(AppContext)
  const { states }:any = context   
  const { searchVAlue, isLoading, open,openTwo, close } = states

  useEffect(() => {
    console.log(states)
  }, [])
  

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
