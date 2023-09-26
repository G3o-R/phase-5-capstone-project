//loginUserSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("user/loginUser", async (loginData, thunkAPI) => {
    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            const errorMessage = await response.text()
            return thunkAPI.rejectWithValue(errorMessage)
        }

        const userData = await response.json()
        return userData
    } catch (error){
        return thunkAPI.rejectWithValue("An error occurred while logging in.")
    }
});

const loginUserSlice = createSlice({
    name: "user",
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
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload
        })
    }
})

export default loginUserSlice.reducer;