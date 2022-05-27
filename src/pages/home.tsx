import React from 'react'
import { motion } from 'framer-motion'
import { Popular } from '../components/popular'
import { Veggie } from '../components/veggie'
import { Cuisine } from './cuisine'

export const Home = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Veggie />
            <Popular />
        </motion.div>
    )
}
