import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    } catch (error){
        return thunkAPI.rejectWithValue("An error occurred while logging in.")
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
    } catch (error){
        return thunkAPI.rejectWithValue("An error occurred while logging in.")
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
    } catch (error){
        return thunkAPI.rejectWithValue("An ocurred with the session")
    }
});

const userSlice = createSlice({
    name: "current_user",
    initialState: {
        user: null,
        loading: false,
        error: []
    },
    reducers: {
        // I'll add to this later
    },
    extraReducers: (builder) => {
        builder
        // login a user
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = [];
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = [];
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload
        })
        // logout the user
        .addCase(logOutUser.pending, (state) => {
            state.loading = true;
            state.error = [];
        })
        .addCase(logOutUser.fulfilled, (state) => {
            state.loading = false;
            state.user = null
        })
        // get me the user
        .addCase(getMe.pending, (state) => {
            state.loading = true;
            state.error = [];
        })
        .addCase(getMe.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload
        })
        .addCase(getMe.rejected, (state, action) => {
            state.loading = false;
            state.user = null
            state.error = action.payload
        })
        // sign up user
        .addCase(signUpUser.pending, (state, action)=> {
            state.loading = true;
            state.error = [];
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.user = action.payload;
            state.error = []
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;