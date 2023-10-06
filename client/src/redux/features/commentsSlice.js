import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { updatePostWithNewComment, removeCommentFromPost } from "./allPostsSlice"

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
        const newComment = await response.json()
        thunkAPI.dispatch(updatePostWithNewComment({ post_id, comment: newComment}));

        return response.json()
    } catch (error){
        return thunkAPI.rejectWithValue("An error occurred trying to make a comment")
    }
});

export const deleteComment = createAsyncThunk("comment/deleteComment", async (commentData, thunkAPI) => {
    try { 
        const response = await fetch(`/comments/${commentData.id}`, {
            method: "DELETE"
        })

        if(!response.ok){
            const errorMessage = "Couldn't delete comment"
            return thunkAPI.rejectWithValue(errorMessage)
        }

        const post_id = commentData.post_id
        const commentID = commentData.id
        thunkAPI.dispatch(removeCommentFromPost({post_id, commentID}))

        return response.json()
    } catch(error) {
        return thunkAPI.rejectWithValue("An error occurred trying to delete the comment")
    }
})

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
        .addCase(addComment.pending, (state, action) => {
            state.loading = true;
            state.error = [];
        })
        // .addCase(addComment.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.comments = [...state.comments,action.payload];
        //     state.error = []
        // })
        .addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        })
        // delete comment
        .addCase(deleteComment.pending, (state) => {
            state.loading = true;
            state.error = [];
        })
        // .addCase(deleteComment.fulfilled, (state, action) => {

        //     state.loading = false;
        //     state.error = [];
        //     state.comments = 
        // })
        .addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
}))

export default commentsSlice.reducer
