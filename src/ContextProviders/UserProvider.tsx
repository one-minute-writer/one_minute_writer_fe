import React, { createContext, useState } from 'react'
import { IUserData } from '../types'


const defaultState: IUserData = { 
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

export const SetUserContext = createContext<null | React.Dispatch<React.SetStateAction<IUserData>>>(null)
export const UserContext = createContext({})

export const UserProvider: React.FC= ({ children }) => {
  const [ userData, setUserData ] = useState(defaultState)
  
  return (
    <SetUserContext.Provider value={setUserData}>
      <UserContext.Provider value={userData}>
        {children}
      </UserContext.Provider>
    </SetUserContext.Provider>
  )
}