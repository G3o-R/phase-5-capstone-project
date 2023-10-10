import React, { useEffect } from "react";
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

function PostDisplay({ post, onClose, showPostDisplay, comment, handleChange, handleCommentSubmit }) {
  const { comments, description, image, user, users_liked, id } = post;
  const dispatch = useDispatch()

  const commentsDisplay = comments.map((comment) => (
    <Comment commentData={comment} key={comment.id} />
  ));

  const likeOrUnLike = users_liked.includes(user) ? <Unlike /> : <LikeSVG /> 

  function handleLike(){
    dispatch(likePost(id))
  }


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
            <CommentButton>
              <CommentSVG />
            </CommentButton>
          </LikeAndCommentButtons>
          <AddCommentTextPostDisplay onSubmit={handleCommentSubmit}>
              <textarea
               type="text" 
               value={comment} 
               name="comment" 
               placeholder="Add a comment.." 
               onChange={handleChange} 
               ></textarea>
               {comment.length > 0 ? <button type="submit" name="post-comment">Post</button>:null}
            </AddCommentTextPostDisplay>
               </BottomSectionSideBar>
        </PostSideBar>
      </PostDisplayContent>
    </PostDisplayContainer>
  );
}

export default PostDisplay;
