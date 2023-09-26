//store.js
import { configureStore } from "@reduxjs/toolkit";
import allUsersReducer from "./features/allUsersSlice";
import loginUserReducer from "./features/loginUserSlice"

export  default configureStore({
    reducer: {
        allUsers: allUsersReducer,
        user: loginUserReducer
    }
})