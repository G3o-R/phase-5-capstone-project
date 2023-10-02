import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
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
    const naviagte = useNavigate()
    useEffect(()=>{
        dispatch(getPosts())

    },[])
    // console.log(posts[0].comments)
    const postsArray = posts.map((post)=> <PostCard post={post} key={post.id}/>)

    return (

        <HomePage>
        Home is here
        <PostsContainer>
        {postsArray}
        </PostsContainer>
        </HomePage>
    )
}

export default Home