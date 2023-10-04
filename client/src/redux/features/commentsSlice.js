import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { updatePostWithNewComment} from "./allPostsSlice"

export const addComment = createAsyncThunk("comment/addComment", async (commentData, thunkAPI) => {
    try {
        const response = await fetch("/comments",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
        if (!response.ok) {
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage)
        }

        const post_id = commentData.post_id
        const newComment = response.json()
        thunkAPI.dispatch(updatePostWithNewComment({ post_id, comment: newComment}));

        return response.json()
    } catch (error){
        return thunkAPI.rejectWithValue("An error occurred trying to make a comment")
    }
});

const commentsSlice = createSlice(({
    name: "comments",
    initialState: {
        comments: [],
        loading: false,
        error: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        // post comment
        .addCase(addComment.pending, (state, action)=> {
            state.loading = true;
            state.error = [];
        })
        .addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = []
        })
        .addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        })

    }
}))

export default commentsSlice.reducer