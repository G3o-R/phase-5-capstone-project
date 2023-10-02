import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getPosts } from "../redux/features/allPostsSlice"
import { useEffect } from "react"

function Home(){
    const {posts} = useSelector((state) => state.allPosts)
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    useEffect(()=>{
        dispatch(getPosts())

    },[])
    console.log(posts)

    return (

        <div>
            Home is here
        </div>
    )
}

export default Home