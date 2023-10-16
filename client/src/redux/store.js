//store.js
import { configureStore} from "@reduxjs/toolkit";
import allUsersReducer from "./features/allUsersSlice";
import userReducer from "./features/userSlice"
import allPostsReducer from "./features/allPostsSlice";
import commentReducer from "./features/commentsSlice"

export  default configureStore({
    reducer: {
        allUsers: allUsersReducer,
        user: userReducer,
        allPosts: allPostsReducer,
        comments: commentReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})