import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const Search = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e?:any) => {
        e.preventDefault()
        navigate("/searched/" + input)
    }

    return (
        <>
            <FormStyle
                onSubmit={submitHandler}
            >
                <FaSearch></FaSearch>
                <input 
                    onChange={(e) => setInput(e.target.value)}
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