import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { updatePostWithNewComment, removeCommentFromPost, updateLikesOnComments } from "./allPostsSlice"
import { updateUsersPostsComments, removeCommentFromSingleUserPost, handleLikesForSingleUserComment } from "./allUsersSlice";

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
            console.log("not okay")

            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }

        const post_id = commentData.post_id
        const newComment = await response.json()
        thunkAPI.dispatch(updateUsersPostsComments({post_id, newComment}))
        thunkAPI.dispatch(updatePostWithNewComment({ post_id, comment: newComment}));
        // debugger
        return newComment
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
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }

        const post_id = commentData.post_id
        const commentID = commentData.id

        thunkAPI.dispatch(removeCommentFromSingleUserPost({post_id, commentID}))
        thunkAPI.dispatch(removeCommentFromPost({post_id, commentID}))
    } catch(error) {
        return thunkAPI.rejectWithValue(["An error occurred trying to delete the comment"])
    }
})

export const likeComment = createAsyncThunk("posts/likeComment", async (commentData, thunkAPI) =>{
    try{
        const response = await fetch(`/comments/${commentData.id}/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage.errors)
        }

        const newComment = await response.json()
        thunkAPI.dispatch(updateLikesOnComments({newComment}))
        thunkAPI.dispatch(handleLikesForSingleUserComment({newComment}))
        return newComment
    } catch {
        return thunkAPI.rejectWithValue("Couldn't like comment")
    }
})

export const clearErrors = createAction("comment/clearErrors");

const commentsSlice = createSlice(({
    name: "comments",
    initialState: {
        comments: [],
        loading: false,
        errors: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        // post comment
        .addCase(addComment.pending, (state, action) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.errors = []
            state.comments = action.payload
        })
        .addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            // debugger
            console.log("rejected")
            state.errors = action.payload;
        })

        // delete comment
        .addCase(deleteComment.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
        
        // like a comment
        .addCase(likeComment.pending, (state) => {
            state.loading = true;
            state.errors = [];
        })
        .addCase(likeComment.rejected, (state, action) => {
            state.errors = action.payload;
            state.loading = [];
        })
        // clears errors
        .addCase(clearErrors, (state) =>{
            state.errors = []
        })

    }
}))

export default commentsSlice.reducer