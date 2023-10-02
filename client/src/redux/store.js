//store.js
import { configureStore} from "@reduxjs/toolkit";
import allUsersReducer from "./features/allUsersSlice";
import userReducer from "./features/userSlice"
import allPostsReducer from "./features/allPostsSlice";

export  default configureStore({
    reducer: {
        allUsers: allUsersReducer,
        user: userReducer,
        allPosts: allPostsReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})