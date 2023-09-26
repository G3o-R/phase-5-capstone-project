//store.js
import { configureStore } from "@reduxjs/toolkit";
import allUsersReducer from "./features/allUsersSlice";
import userReducer from "./features/userSlice"

export  default configureStore({
    reducer: {
        allUsers: allUsersReducer,
        user: userReducer
    }
})