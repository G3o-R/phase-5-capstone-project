import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk("allUsers/getAllUsers", async ()=>{
    return fetch("/users").then((res) => 
        res.json()
    );
})

const allUsersSlice = createSlice(({
    name: "allUsers",
    initialState: {
        allUsers: [],
        loading: false
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.loading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.loading = false;

        },
    },
}));

export default allUsersSlice.reducer;