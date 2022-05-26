import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

export const Veggie = () => {

    const [veggie, setVeggie] = useState([])

    useEffect(() => {
      getVeggie()
    }, [])    

    const getVeggie = async () => {

        const check = localStorage.getItem("veggie")

        if (check){
            setVeggie(JSON.parse(check))
        } else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json()
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            // console.log(data.recipes)
        }
    }

    return (
        <>
            <Wrapper>
                <h3>Vegetarian Meal</h3>

                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {veggie.map((recipe) => {
                        const { id, title, image } = recipe

                        return (
                            <SplideSlide key={id}>
                                <Card>
                                    <Link
                                        to={'/recipe/' + id}
                                    >
                                        <p>{title}</p>
                                        <img src={image} alt={title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: #fff;
        text-alight: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`
