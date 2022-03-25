import React, { createContext, useState } from 'react'

export const Errors = createContext<string | null>(null)

export const ErrorsProvider = ({ children }) => {

    const [ errorMessage, setErrorMessage ] = useState<string>('')

    return(
      <Errors.Provider value={{ errorMessage, setErrorMessage }}>
        {children}
      </Errors.Provider>
    )
}

// import React, { createContext, useState, FC } from "react";
// import { TodosContextState } from "./types";

// const contextDefaultValues: TodosContextState = {
//   todos: [],
//   addTodo: () => {}
// };

// export const TodosContext = createContext<TodosContextState>(
//   contextDefaultValues
// );

// const TodosProvider: FC = ({ children }) => {
//   const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);

//   const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);

//   return (
//     <TodosContext.Provider
//       value={{
//         todos,
//         addTodo
//       }}
//     >
//       {children}
//     </TodosContext.Provider>
//   );
// };

// export default TodosProvider;