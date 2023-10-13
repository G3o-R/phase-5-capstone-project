import {
    PostOptionsDisplayContainer,
    PostOptionsContent,
    CloseOptionsPost,
    PostOption
} from "../styles/PostOptionsDisplayStyles"

import { useDispatch } from "react-redux"
import { deletePost } from "../redux/features/allPostsSlice"
import { useState } from "react"
import EditPost from "./EditPosts"

function PostOptionsDisplay({postData, onClose, desc}){
    const [showEdit, setShowEdit] = useState(false)
    const dispatch = useDispatch()
    function handleDeleteComment(){
        dispatch(deletePost(postData.id))
        onClose()
    }

    function handleEdit(){
        console.log("edit post")
    }

    return (
      <>
      <PostOptionsDisplayContainer className="active">
        <CloseOptionsPost onClick={onClose}>x</CloseOptionsPost>
        <PostOptionsContent>
          <PostOption onClick={handleDeleteComment} className="delete">Delete</PostOption>
          <PostOption onClick={()=>setShowEdit(true)} className="edit">Edit</PostOption>
          <PostOption onClick={onClose} className="cancel">Cancel</PostOption>
        </PostOptionsContent>
      </PostOptionsDisplayContainer>
      {showEdit ? <EditPost onClose={()=>setShowEdit(false)} postData={postData}/> : null}
      </>
    );
  }

export default PostOptionsDisplay