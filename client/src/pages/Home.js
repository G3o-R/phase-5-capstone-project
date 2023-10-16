import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../redux/features/allPostsSlice"
import { useEffect } from "react"
import {
     HomePage,
     PostsContainer,
    
    } from "../styles/HomeStyles"

import PostCard from "../component/PostCard"

function Home(){
    const {posts} = useSelector((state) => state.allPosts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts())

    },[dispatch])

    const postsArray = posts.map((post)=> <PostCard post={post} key={post.id}/>)

    return (

        <HomePage>
        <PostsContainer>
        {postsArray}
        </PostsContainer>
        </HomePage>
    )
}

export default Home