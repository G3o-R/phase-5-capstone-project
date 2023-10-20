import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

// handles logging in. creates a session
export const loginUser = createAsyncThunk("user/loginUser", async (loginData, thunkAPI) => {
    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        })

        if (!response.ok) {
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }

        return response.json()
    } catch (errors){
        return thunkAPI.rejectWithValue("An errors occurred while logging in.")
    }
});

// handles loggin out. Deletes a session
export const logOutUser = createAsyncThunk("user/logOutUser", async ()=>{
    return fetch ("/logout", {
        method: "delete",
    })
})

// handles creating an account also creates a session
export const signUpUser = createAsyncThunk("user/signUpUser", async (signUpData, thunkAPI) => {
    try {
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpData)
        })
        
        if (!response.ok) {
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }
        return response.json()
    } catch (errors){
        return thunkAPI.rejectWithValue("An errors occurred while logging in.")
    }
})

// handles getting a session if session[:user_id] already exists
export const getMe = createAsyncThunk("user/getMe", async (thunkAPI)=>{
    try {
        const response = await fetch("/me")

        if (!response.ok) {
            return thunkAPI.rejectWithValue("Not Authorized")
        }

        return response.json()
    } catch (errors){
        return thunkAPI.rejectWithValue("An ocurred with the session")
    }
});

export const clearErrors = createAction("comment/clearErrors");

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: true,
        errors: []
    },
    reducers: {
        // I'll add to this later
    },
    extraReducers: (builder) => {
        builder
        // login a user
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.errors = [];
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.errors = action.payload
        })
        // logout the user
        .addCase(logOutUser.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(logOutUser.fulfilled, (state) => {
            state.loading = false;
            state.user = null
        })
        // get me the user
        .addCase(getMe.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(getMe.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload
        })
        .addCase(getMe.rejected, (state) => {
            state.loading = false;
            state.user = null;
        })
        // sign up user
        .addCase(signUpUser.pending, (state, action)=> {
            state.loading = true;
            state.errors = [];
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.errors = []
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.errors = action.payload;
        })
        .addCase(clearErrors, (state) =>{
            state.errors = []
        })
    }
})

export default userSlice.reducer;