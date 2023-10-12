import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { updateUsersPostsLikes } from "./allUsersSlice";
import { json } from "react-router-dom";

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

export const likePost = createAsyncThunk("posts/likePost", async (id, thunkApi) =>{
    try{
        const response = await fetch(`/posts/${id}/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkApi.rejectWithValue(errorMessage)
        }

        const likedPost = await response.json()
        // for some reason including this line prevents liking
        thunkApi.dispatch(updateUsersPostsLikes({likedPost, id: likedPost.id}))
        return likedPost
    } catch {
        return thunkApi.rejectWithValue("Couldn't like comment")
    }
})

export const createPost = createAsyncThunk("posts/createPost", async (postData, thunkAPI) => {
    console.log(postData)
    try{
        console.log("trying")
        const response = await fetch('/posts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })

        if (!response.ok){
            console.log("not okay")
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage)
        }

        return response.json()
    } catch{
        console.log("error")
        return thunkAPI.rejectWithValue("An error occurred trying to create post")
    }
})

export const updatePostWithNewComment = createAction("posts/updatePostWithNewComment")
export const removeCommentFromPost = createAction("posts/removeCommentFromPost")
export const updateLikesOnComments = createAction("posts/handleLikesOnComments")

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
        //gets posts
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
        // likes a post
        .addCase(likePost.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(likePost.fulfilled, (state, action) => {
            const {id} = action.payload
            const updatedPostsArray = state.posts.map((post) => {
                if (post.id === id){
                    return post = action.payload

                }
                else { return post}
            })
            state.posts = updatedPostsArray;
            state.error = [];
            state.loading = false
        })
        .addCase(likePost.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // posts a post lol
        .addCase(createPost.pending, (state) => {
            state.loading = true;
            state.error = [];
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.posts = [action.payload,...state.posts];
            state.error = [];
            state.loading = false;
        })
        .addCase(createPost.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false
        })
        // handles comments on posts
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
        .addCase(updateLikesOnComments, (state, action) => {
            const { newComment } = action.payload;
          
            const updatedPosts = state.posts.map((post) => {
              if (newComment.post_id === post.id) {
                const updatedPost = {
                  ...post,
                  comments: post.comments.map((comment) => {
                    if (comment.id === newComment.id) {
                      return newComment;
                    }
                    return comment;
                  })
                };
          
                return updatedPost;
              }
          
              return post;
            });
          
            state.posts = updatedPosts;
            state.error = [];
          })
    }
}))

export default allPostsSlice.reducer