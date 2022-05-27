import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

export const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    useEffect(() => {
        getCuisine(params.type)
        // console.log(params.type)
    }, [params.type])

    const getCuisine = async (name?:any) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
        console.log(recipes.results)
    }    

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
                const { id, image, title } = item

                return (
                    <Card key={id}>
                        <Link 
                            to={'/recipe/' + id}                                    
                        >
                            <img src={image} alt={title} />
                            <h4>{title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`