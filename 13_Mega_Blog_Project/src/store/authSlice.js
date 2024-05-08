// This slice is created for checking wether the user is authenticated or not.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

// Always remember that createSlice takes three params: name, initialState, reducers 
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload,userData;
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;