import React, { useContext, useEffect } from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import { Category } from './components/category'
import { Search } from './components/search'
import { AppContext } from './context/context'
import { Home } from './pages/home'
import { Pages } from './pages/pages'

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
        <Nav>
          <GiKnifeFork />
          <Logo
            to={"/"}
          >delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App
