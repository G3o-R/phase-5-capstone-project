import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk("allUsers/getAllUsers", async ()=>{
    return fetch("/users").then((res) => 
        res.json()
    );
})

export const getUser = createAsyncThunk("allUsers/getUser", async (username, thunkAPI) => {
    try {
        const response = await fetch(`/users/${username}`)

        if (!response.ok) {
            return thunkAPI.rejectWithValue("couldn't get user")
        }

        return response.json()
    } catch (error){
        return thunkAPI.rejectWithValue("couldn't get user")
    }
});

const allUsersSlice = createSlice(({
    name: "allUsers",
    initialState: {
        allUsers: [],
        singleUser: null,
        loading: false,
        errors: []
    },
    extraReducers: (builder) => {
        builder
        // gets all users
        .addCase(getAllUsers.pending, (state) => {
            state.loading = true;
            state.errors = []
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.errors = [];
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.allUsers = [];
            state.errors = action.payload;
        })
        // get single user
        .addCase(getUser.pending, (state) => {
            state.loading = true;
            state.errors = []
            console.log("pending")

        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.singleUser = action.payload;
            state.loading = false
            console.log("fullfilled")
        })

    },
}));


export default allUsersSlice.reducer;