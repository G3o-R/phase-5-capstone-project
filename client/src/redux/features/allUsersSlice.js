import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("allUsers/getUser", async (username, thunkAPI) => {
    try {
        const response = await fetch(`/users/${username}`)

        if (!response.ok) {
            return thunkAPI.rejectWithValue("couldn't get user")
        }

        return response.json()
    } catch (error){
        return thunkAPI.rejectWithValue("couldn't get user")
    }
});
export const updateUsersPostsComments = createAction("allUsers/updateUsersPostComments")
export const updateUsersPostsLikes = createAction("allUsers/updateUsersPostsLikes")
export const removeCommentFromSingleUserPost = createAction("allUsers/removeCommentFromSingleUserPost")
export const handleLikesForSingleUserComment = createAction("allUsers/handleLikesForSingleUserComment")
export const removePostFromSingleUser = createAction("allUsers/removePostFromSingleUser")
export const editPostFromSingleUser = createAction("allUsers/editPostFromSIngleUser")

const allUsersSlice = createSlice(({
    name: "allUsers",
    initialState: {
        allUsers: [],
        singleUser: null,
        loading: false,
        errors: []
    },
    extraReducers: (builder) => {
        builder
        // get single user
        .addCase(getUser.pending, (state) => {
            state.loading = true;
            state.errors = []
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.singleUser = action.payload;
            state.loading = false
        })
        .addCase(removePostFromSingleUser, (state, action) => {
            const {postId} = action.payload;
            if (state.singleUser) {
                state.singleUser.user_posts = state.singleUser.user_posts.filter((post) => post.id !== postId);
            }
        })
        .addCase(updateUsersPostsLikes, (state, action) => {
            const { likedPost, id } = action.payload;
            
            if (state.singleUser) {
              const updatedPosts = state.singleUser.user_posts.map((post) => {
                if (post.id === id) {
                  return { ...post, ...likedPost };
                } else {
                  return post;
                }
              });
              state.singleUser.user_posts = updatedPosts;
            }
            state.errors = [];
          })
          
        .addCase(updateUsersPostsComments, (state, action) => {
            const { post_id, newComment } = action.payload;
        if (state.singleUser){
            const updatedUserPosts = state.singleUser.user_posts.map((post) => {
                if (post.id === post_id) {
                    return {
                        ...post,
                        comments: [...post.comments, newComment]
                    };
                }
                return post;
            });
            state.singleUser.user_posts = updatedUserPosts;
        }
            state.errors = []
        })
        .addCase(removeCommentFromSingleUserPost, (state,action) =>{
            const {post_id, commentID} = action.payload
            if(state.singleUser){
                const updatedPosts = state.singleUser.user_posts.map((post) => {
                    if (post.id === post_id){
                        const updatedCommentsArray = post.comments.filter((comment) => comment.id !== commentID)
                        return {...post, comments: updatedCommentsArray}
                    } else {return post}
                })
                state.singleUser.user_posts = updatedPosts
            }
        })
        .addCase(editPostFromSingleUser,(state,action) => {
            const {newPost} = action.payload;
            if (state.singleUser){
                const updatedPostsArray = state.singleUser.user_posts.map((post) => {
                    if (post.id === newPost.id){
                        return post = newPost
                    }
                    return post
                })
                state.singleUser.user_posts = updatedPostsArray
            } 
            state.errors = []
        })
        .addCase(handleLikesForSingleUserComment, (state, action) => {
            const {newComment} = action.payload
            if (state.singleUser){

                const updatedPost = state.singleUser.user_posts.map((post) => {
                    if(newComment.post_id === post.id){
                        const updatedPost = {
                            ...post,
                            comments: post.comments.map((comment) =>{
                                if (comment.id === newComment.id){
                                    return newComment
                                }
                                return comment
                            })
                        }
                        return updatedPost
                    }
                    return post
                })
                state.singleUser.user_posts = updatedPost
            }
        })
        
        
        

    },
}));


export default allUsersSlice.reducer;