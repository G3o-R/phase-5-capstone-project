import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk("allUsers/getAllUsers", async ()=>{
    return fetch("/users").then((res) => 
        res.json()
    );
})

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
        // gets all users
        .addCase(getAllUsers.pending, (state) => {
            state.loading = true;
            state.errors = []
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.errors = [];
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.allUsers = [];
            state.errors = action.payload;
        })
        // get single user
        .addCase(getUser.pending, (state) => {
            state.loading = true;
            state.errors = []
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.singleUser = action.payload;
            state.loading = false
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
        })
        .addCase(removeCommentFromSingleUserPost, (state,action) =>{
            const {post_id, commentID} = action.payload
            const updatedPosts = state.singleUser.user_posts.map((post) => {
                if (post.id === post_id){
                    const updatedCommentsArray = post.comments.filter((comment) => comment.id !== commentID)
                    return {...post, comments: updatedCommentsArray}
                } else {return post}
            })
            state.singleUser.user_posts = updatedPosts
        })
        .addCase(handleLikesForSingleUserComment, (state, action) => {
            const {newComment} = action.payload
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
        })
        
        
        

    },
}));


export default allUsersSlice.reducer;