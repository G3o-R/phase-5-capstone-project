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
            const { id } = action.payload;
            const updatedPosts = state.singleUser.user_posts.map((post) => {
                if (post.id === id) {
                    return { ...post, ...action.payload };
                } else {
                    return post;
                }
            });
            state.singleUser.user_posts = updatedPosts;
            state.errors = [];
        })
        .addCase(updateUsersPostsComments, (state, action) => {
            const { post_id, newComment } = action.payload;
        
            const updatedUserPosts = state.singleUser.user_posts.map((post) => {
                if (post.id === post_id) {
                    console.log(post)
                    return {
                        ...post,
                        comments: [...post.comments, newComment]
                    };
                }
                return post;
            });
            state.singleUser.user_posts = updatedUserPosts;
        });
        
        
        

    },
}));


export default allUsersSlice.reducer;