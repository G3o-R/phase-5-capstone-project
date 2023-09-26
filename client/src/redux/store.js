import { configureStore } from "@reduxjs/toolkit";
import allUsersReducer from "./features/allUsersSlice";

export  default configureStore({
    reducer: {
        allUsers: allUsersReducer
    }
})