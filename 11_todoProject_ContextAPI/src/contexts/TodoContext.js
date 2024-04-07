import { createContext, useContext } from "react"

// creating context first then only the context can be used.
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "Todo Message",
            completed: false
        }
    ],

    addTodo: (todoTitle) =>{},
    updateTodo: (id, todoTitle) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
})

// Creating a simple hook through which we can use the context.
export const useTodo = () =>{
    return useContext(TodoContext)
}

// Now, we need to provide the data to the components that are descendants of it in the component tree without the need to props manually at every level, for that we use context.provider(here TodoContext.Provider)
export const TodoProvider = TodoContext.Provider