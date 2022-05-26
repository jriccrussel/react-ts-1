import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cuisine } from './cuisine'
import { Home } from './home'
 
export const Pages = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home />}
            />
            <Route 
                path="/cuisine/:type" 
                element={<Cuisine />}
            />
        </Routes>
    )
}
  