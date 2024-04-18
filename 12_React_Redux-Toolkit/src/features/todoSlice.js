// This can be named as todo.js as well there is nothing special with todoSlice.js
// There can be n number of slices, slices are nothing just a simple functionality. Here we have a todoSlice, but there can be multiple like loginSlice, subscriptionSlice etc.

import {createSlice, nanoid} from '@reduxjs/toolkit' // nanoid for getting the unique id's for our todos

const initialState = {
    todos: [{
        id: 1, 
        text:"Hello World"
    } // There can be more todos here separated by ","
]
}

// Now, creating a slice, i.e. functionalities
// createSlice is a method which takes an object as the argument, that object contains the name, the starting state or the initial state, reducers(i.e. the functionalities in our case it would be adding a todo, removing a todo, updating a todo.)
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // To add a todo creating a property. Now, there are two parameters which redux gives us access to, one in state and another one is action.
        addTodo: (state, action) =>{
            // Here "state" gives access to the values kept in the initial state and if changed then that too & "action" are the values using which can perform the operations like add, remove etc.
            const todo ={
                id: nanoid(),
                text: action.payload // Taking the input text entered by the user.
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },

        // updateTodo: (state, action) => {
        //     const id = action.payload;
        //     const todoToUpdate = state.todos.find(todo => todo.id === id);
        //     console.log(todoToUpdate)
        // }
    }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer


