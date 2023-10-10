import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as CommentSVG } from "../images/Comment.svg"
import { ReactComponent as Unlike } from "../images/Unlike.svg"
import {
    PostCardContainer,
    UserName,
    PostContainer,
    BottomPostSection,
    LikeAndCommentButtons,
    LikeButton,
    CommentButton,
    Likes,
    Description,
    SeeCommentsButton,
    ViewComments,
    AddCommentText
} from "../styles/PostCardStyles.js"
import { useState } from "react";
import { useDispatch} from "react-redux";
import { addComment } from "../redux/features/commentsSlice.js";
import { likePost } from "../redux/features/allPostsSlice";

import PostDisplay from "./PostDisplay";

function PostCard({ post }) {
    const dispatch = useDispatch()
    const [showPostDisplay, setShowPostDisplay] = useState(false)

    const { comments, description, image, likes, user, id, users_liked } = post;
    const [commentData, setComment] = useState({
      comment: ""
    })
    const {comment} = commentData

    function handleChange(e){
      let name = e.target.name
      let value = e.target.value
      setComment({...commentData, [name]:value})
    }

    function handleCommentSubmit(e){
      e.preventDefault()
      const commentToPost = {
        comment: comment,
        post_id: id
      }
      setComment({
        comment: ""
      })
      dispatch(addComment(commentToPost))
    }

    function handleLike(e){
      e.preventDefault()
      dispatch(likePost(id))
    }

    const likeOrUnLike = users_liked.includes(user) ? <Unlike /> : <LikeSVG /> 



    return (
      <>
      <PostCardContainer name="post-card">
        <UserName name="users-name">{user}</UserName>
        <PostContainer name="post-container">
          <img src={image} alt={`${user}'s post`} name="post" />
        </PostContainer>
        <BottomPostSection name="bottom-post-section">
          <LikeAndCommentButtons name="like-and-comment-btns">
            <LikeButton onClick={handleLike}>
              {likeOrUnLike}
            </LikeButton>
            <CommentButton onClick={() => setShowPostDisplay(!showPostDisplay)}>
              <CommentSVG />
            </CommentButton>
          </LikeAndCommentButtons>
          <Likes name="likes">{likes} likes</Likes>
          <Description name="description">{description}</Description>
          <SeeCommentsButton name="see-comments-button">
            <ViewComments onClick={() => setShowPostDisplay(!showPostDisplay)}>
              View all {comments.length} comments...
            </ViewComments>
            <AddCommentText onSubmit={handleCommentSubmit}>
              <input
               type="text" 
               value={comment} 
               name="comment" 
               placeholder="Add a comment.." 
               onChange={handleChange} 
               />
               {comment.length > 0 ? <button type="submit" name="post-comment">Post</button>:null}
            </AddCommentText>
          </SeeCommentsButton>
        </BottomPostSection>
      </PostCardContainer>

      {showPostDisplay? <PostDisplay
       post={post} 
       onClose={() => setShowPostDisplay(false)}
       showPostDisplay={showPostDisplay}/>: null}
      </>
    );
  }
  
  export default PostCard;