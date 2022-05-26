import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export const Searched = () => {
    const [searched, setSearched] = useState([])
    let params = useParams() 

    useEffect(() => {
        getSearched(params.search)
        // console.log(params.type)
    }, [params.search])

    const getSearched = async (name?:any) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearched(recipes.results)
        console.log(recipes.results)
    }    

    return (
        <Grid>
            {searched.map((item) => {
                const { id, image, title } =item

                return (
                    <Card key={id}>
                        <img src={image} alt={title} />
                        <h4>{title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
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
