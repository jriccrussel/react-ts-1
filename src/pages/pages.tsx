import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cuisine } from './cuisine'
import { Home } from './home'
import { Recipe } from './recipe'
import { Searched } from './searched'
 
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
            <Route 
                path="/searched/:search" 
                element={<Searched />}
            />
            <Route 
                path="/recipe/:name" 
                element={<Recipe />}
            />
        </Routes>
    )
}
   