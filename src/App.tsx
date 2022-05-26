import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Category } from './components/category'
import { AppContext } from './context/context'
import { Home } from './pages/home'
import { Pages } from './pages/pages'
import { Search } from './pages/search'

function App() {
  const context = useContext(AppContext)
  const { states }:any = context   
  const { searchVAlue, isLoading, open,openTwo, close } = states

  useEffect(() => {
    console.log(states)
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
