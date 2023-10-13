import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { updateUsersPostsLikes, removePostFromSingleUser, editPostFromSingleUser } from "./allUsersSlice";

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

// likes a post
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

// creates a post
export const createPost = createAsyncThunk("posts/createPost", async (postData, thunkAPI) => {
    try{
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
        return thunkAPI.rejectWithValue("An error occurred trying to create post")
    }
})

// deletes a post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId, thunkAPI) => {
    try{
        const response = await fetch(`/posts/${postId}`,{
            method:"DELETE"
        })

        if(!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage)
        }
        thunkAPI.dispatch(removePostFromSingleUser({postId}))
        return postId
    } catch {
        thunkAPI.rejectWithValue("an error occurred trying to delete the post")
    }
})

// edits a post
export const editDescriptionOnPost = createAsyncThunk("posts/editDescriptionOnPost", async (descriptionToUpdateData, thunkAPI) => {
    const {postId, descriptionData} = descriptionToUpdateData
    try {
        const response = await fetch(`/posts/${postId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({description: descriptionData})
        })

        if (!response.ok){
            const errorMessage = await response.json()
            return thunkAPI.rejectWithValue(errorMessage)
        }

        const newPost = await response.json()
        thunkAPI.dispatch(editPostFromSingleUser({newPost}))
        return await response.json()
    } catch{
        return thunkAPI.rejectWithValue("An error occurred trying to update the description")
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
        .addCase(getPosts.rejected, (state) => {
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
        .addCase(likePost.rejected, (state, action) => {
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
        // deletes a post
        .addCase(deletePost.pending,(state) => {
            state.loading = true;
            state.error = []
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            const deletedPostId = action.payload
            const updatedPostsArray = state.posts.filter((post) => post.id !== deletedPostId)
            state.posts = updatedPostsArray;
            state.error = [];
            state.loading = false;
        })
        .addCase(deletePost.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })

        // edits a post
        .addCase(editDescriptionOnPost.pending,(state) => {
            state.loading = true;
            state.error = [];
        })
        .addCase(editDescriptionOnPost.fulfilled, (state,action) =>{
            const newPost = action.payload
            const updatedPostsArray = state.posts.map((post) =>{
                if (post.id === newPost.id){
                    return post = newPost
                }
                return post
            })
            state.posts = updatedPostsArray
            state.error = [];
            state.loading = false;
        })
        .addCase(editDescriptionOnPost.rejected, (state, action) => {
            state.error = [];
            state.loading = false;
        })
        // handles comments on posts
        .addCase(updatePostWithNewComment, (state, action) => {
            const {post_id, comment } = action.payload
            const updatedPosts = state.posts.map((post)=>{
                if (post_id === post.id) {
                    return { ...post, comments: [...post.comments, comment]}
                };
                return post
            });
            state.posts = updatedPosts
        })
        .addCase(removeCommentFromPost, (state, action) => {
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