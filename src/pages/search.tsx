import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export const Search = () => {
    return (
        <>
            <FormStyle

            >
                <FaSearch></FaSearch>
                <input 
                    type="text" 
                />
            </FormStyle>
        </>
    )
}

const FormStyle = styled.form`
    margin: 0 20rem;
    position: relative;

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: #fff;
    }
`