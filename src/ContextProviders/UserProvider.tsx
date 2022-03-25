import React, { createContext, useState } from 'react'

export const User = createContext<string | null>(null)

export const UserProvider = ({ children }) => {

    const [ userData, setUserData ] = useState<string | null>('')

    return(
      <User.Provider value={{ userData, setUserData }}>
        {children}
      </User.Provider>
    )
}