import React, { createContext, useState } from 'react'

export const Errors = createContext<string | null>(null)

export const ErrorsProvider = ({ children }) => {

    const [ errorMessage, setErrorMessage ] = useState('')

    return(
      <Errors.Provider value={{ errorMessage, setErrorMessage }}>
        {children}
      </Errors.Provider>
    )
}