import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

export const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name:any) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])
    

    return (
        <div>{params.type}</div>
    )
}

