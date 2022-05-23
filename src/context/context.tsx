import { createContext, FC, useContext, useState, useEffect } from 'react'

export const AppContext = createContext({})

export const ContextProvider = ({children}:any) => {

    const initialValue = {
        searchVAlue: '',
        isLoading: false,
        open: false,
        openTwo: false,
        close:true
    }

    const [states, setStates] = useState(initialValue)

    return (
        <AppContext.Provider value={{
            states,
            setStates,
        }}>
            {children}
        </AppContext.Provider>
    )
}
