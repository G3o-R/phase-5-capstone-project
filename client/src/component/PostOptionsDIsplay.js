import {
    PostOptionsDisplayContainer,
    PostOptionsContent,
    CloseOptionsPost,
    PostOption
} from "../styles/PostOptionsDisplayStyles"

import { useDispatch } from "react-redux"
import { deletePost } from "../redux/features/allPostsSlice"

function PostOptionsDisplay({postData, onClose}){
    const dispatch = useDispatch()
    function handleDeleteComment(){
        dispatch(deletePost(postData.id))
        onClose()
    }

    function handleEdit(){
        console.log("edit post")
    }

    return (
      <PostOptionsDisplayContainer className="active">
        <CloseOptionsPost onClick={onClose}>x</CloseOptionsPost>
        <PostOptionsContent>
          <PostOption onClick={handleDeleteComment} className="delete">Delete</PostOption>
          <PostOption onClick={handleEdit} className="edit">Edit</PostOption>
          <PostOption onClick={onClose} className="cancel">Cancel</PostOption>
        </PostOptionsContent>
      </PostOptionsDisplayContainer>
    );
  }

export default PostOptionsDisplay