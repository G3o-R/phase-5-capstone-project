import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../redux/features/allPostsSlice"
import { clearErrors } from "../redux/features/commentsSlice"
import { useEffect } from "react"
import {
     HomePage,
     PostsContainer,
    } from "../styles/HomeStyles"

import PostCard from "../component/PostCard"
import DisplayErrors from "../component/DisplayErrors"

function Home(){
    const {posts} = useSelector((state) => state.allPosts)
    const {errors} = useSelector((state) => state.comments)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts())

    },[dispatch])

    useEffect(() => {
        const timer = setTimeout(() => {
          dispatch(clearErrors());
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [errors, dispatch]);

    const postsArray = posts.map((post)=> <PostCard post={post} key={post.id}/>)

    return (

        <HomePage>
        <PostsContainer>
        {postsArray}
        </PostsContainer>
    {errors.length > 0 ? <DisplayErrors errors={errors}/> : null}

        </HomePage>
    )
}

export default Home