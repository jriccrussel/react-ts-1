import React from 'react'
import { Popular } from '../components/popular'
import { Veggie } from '../components/veggie'
import { Cuisine } from './cuisine'

export const Home = () => {
    return (
        <>
            <Veggie />
            <Popular />
        </>
    )
}
