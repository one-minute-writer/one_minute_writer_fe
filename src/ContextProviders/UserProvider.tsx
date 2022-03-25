import React, { createContext, useState } from 'react'

export const User = createContext(null)

export const UserProvider: React.FC = ({ children }) => {

  const [ userData, setUserData ] = useState<string | null>('')
  
  return(
    <User.Provider value={{ userData, setUserData }}>
      {children}
    </User.Provider>
  )
}