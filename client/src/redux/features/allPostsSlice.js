import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { deleteComment } from "./commentsSlice";

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
    try {
        const response = await fetch("/posts")

        if (!response.ok) {
            return thunkAPI.rejectWithValue("An error occurred getting feed")
        }

        return response.json()
    } catch (error) {
        return thunkAPI.rejectWithValue("An error occurred getting posts")
    }
})

export const updatePostWithNewComment = createAction("posts/updatePostWithNewComment")
export const removeCommentFromPost = createAction("posts/removeCommentFromPost")

const allPostsSlice = createSlice(({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = [];
        })
        .addCase(getPosts.rejected, (state,action) => {
            state.loading = false;
            state.posts = null;
            state.error = [];
        })
        .addCase(updatePostWithNewComment, (state,action) => {
            const {post_id, comment } = action.payload
            const updatedPosts = state.posts.map((post)=>{
                if (post_id === post.id) {
                    return { ...post, comments: [...post.comments, comment]}
                };
                return post
            });
            state.posts = updatedPosts
        })
        .addCase(removeCommentFromPost, (state,action) => {
            const {post_id, commentID } = action.payload
            const updatedPosts = state.posts.map((post) => {
                if (post_id === post.id) { 
                const updatedCommentsArray = post.comments.filter((comment) => comment.id !== commentID)
                return { ...post, comments: updatedCommentsArray}
                };
                return post
            });
            state.posts = updatedPosts
        })
    }
}))

export default allPostsSlice.reducer