import React, { createContext, useState } from 'react'

export const Errors = createContext<string | null>(null)

export const UserProvider = ({ children }) => {

    const [ errorMessage, setErrorMessage ] = useState('')

    return(
      <User.Provider value={{ userData, setUserData }}>
        {children}
      </User.Provider>
    )
}