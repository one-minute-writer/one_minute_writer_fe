import React, { createContext, useState } from 'react'

export const Errors = createContext(null)

export const ErrorsProvider: React.FC = ({ children }) => {

    const [ errorMessage, setErrorMessage ] = useState<string>('')

    return(
      <Errors.Provider value={{ errorMessage, setErrorMessage }}>
        {children}
      </Errors.Provider>
    )
}
