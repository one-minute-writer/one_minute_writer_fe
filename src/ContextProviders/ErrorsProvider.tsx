import React, { createContext, useState } from 'react'


// export const Errors = createContext(null)

// export const ErrorsProvider: React.FC = ({ children }) => {

//     const [ errorMessage, setErrorMessage ] = useState<string>('')

//     return(
//       <Errors.Provider value={{ errorMessage, setErrorMessage }}>
//         {children}
//       </Errors.Provider>
//     )
// }

export const SetErrorContext = createContext<null | React.Dispatch<React.SetStateAction<string>>>(null)
export const ErrorContext = createContext({})

export const ErrorProvider: React.FC= ({ children }) => {
  const [ errorData, setErrorData ] = useState('')
  
  return (
    <SetErrorContext.Provider value={setErrorData}>
      <ErrorContext.Provider value={errorData}>
        {children}
      </ErrorContext.Provider>
    </SetErrorContext.Provider>
  )
}
