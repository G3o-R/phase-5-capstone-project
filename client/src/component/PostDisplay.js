import React, { useState, useRef } from "react";
import { addComment } from "../redux/features/commentsSlice.js";

import {
  PostDisplayContainer,
  PostDisplayContent,
  CloseButton,
  PostImage,
  UserInfo,
  CommentsList,
  ImageContainer,
  PostSideBar,
  AddCommentTextPostDisplay,
  BottomSectionSideBar,
} from "../styles/PostDisplayStyles.js";
import {
  LikeAndCommentButtons,
  LikeButton,
  CommentButton
} from "../styles/PostCardStyles.js"

import Comment from "./Comment";
import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as CommentSVG } from "../images/Comment.svg"
import { ReactComponent as Unlike } from "../images/Unlike.svg"
import { useDispatch } from "react-redux";
import { likePost } from "../redux/features/allPostsSlice.js";

function PostDisplay({ post, onClose, showPostDisplay }) {
  const textareaRef = useRef(null);
  const dispatch = useDispatch()
  const [commentData, setComment] = useState({ comment: "" })
  const {comment} = commentData

  const { comments, description, image, user, users_liked, id } = post;
  
  // debugger
  const commentsDisplay = comments.map((comment) => (
    <Comment commentData={comment} key={comment.id} />
    ));

    function handleLike(){
      dispatch(likePost(id))
    }

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

  const likeOrUnLike = users_liked.includes(user) ? <Unlike /> : <LikeSVG /> 




  return (
    <PostDisplayContainer
      className={`post-display ${showPostDisplay ? "active" : ""}`}
    >
      <CloseButton onClick={onClose}>×</CloseButton>
      <PostDisplayContent>
        <ImageContainer>
          <PostImage src={image} alt={`${user}'s post`} />
        </ImageContainer>
        <PostSideBar>
          <UserInfo>
            <h3>{user}</h3>
            <h3>{description}</h3>
          </UserInfo>
          <CommentsList>{commentsDisplay}</CommentsList>
          <BottomSectionSideBar>
            <LikeAndCommentButtons name="like-and-comment-btns">
              <LikeButton onClick={handleLike}>
                {likeOrUnLike}
              </LikeButton>
              <CommentButton onClick={() => textareaRef.current.focus()}>
                <CommentSVG />
              </CommentButton>
            </LikeAndCommentButtons>
            <AddCommentTextPostDisplay onSubmit={handleCommentSubmit}>
              <textarea
                ref={textareaRef}
                type="text"
                value={comment}
                name="comment"
                placeholder="Add a comment.."
                onChange={handleChange}
              ></textarea>
              {comment.length > 0 ? <button type="submit" name="post-comment">Post</button> : null}
            </AddCommentTextPostDisplay>
          </BottomSectionSideBar>
        </PostSideBar>
      </PostDisplayContent>
    </PostDisplayContainer>
  );
}

export default PostDisplay;
