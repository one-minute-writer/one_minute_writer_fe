import React, { createContext, useState } from 'react'
import { IUserData } from '../types'

interface userDataTypes {
  userData: IUserData
}

const defaultState = { 
  data: {
    id: 4,
    type: "user",
    attributes: {
      username: "plutarch",
      email: "pluto@athens.com",
      stories: [
        {
          id: 6,
          user_id: 4,
          total_time_in_seconds: 120,
          body_text: "I went to the pool today",
          image: "fake_image.com",
          word: "hooray",
          sound: "fake_sound.com"
        },
        {
          id: 10,
          user_id: 4,
          total_time_in_seconds: 180,
          body_text: "I went to the store today",
          image: "fakest_image.com",
          word: "hooray yall",
          sound: "fakest_sound.com"
        }
      ]
    }
  }
}

export const UserContext = createContext(defaultState)

export const UserProvider: React.FC= ({ children }) => {

  const [ userData, setUserData ] = useState<userDataTypes>(defaultState)
  
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  )
}