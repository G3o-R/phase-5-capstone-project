import React, { useEffect } from "react";
import {
  PostDisplayContainer,
  PostDisplayContent,
  CloseButton,
  PostImage,
  UserInfo,
  CommentsList,
  ImageContainer,
  PostSideBar
} from "../styles/PostDisplayStyles.js";
import { AddCommentText } from "../styles/PostCardStyles.js";

import Comment from "./Comment";

function PostDisplay({ post, onClose, showPostDisplay, comment, handleChange, handleCommentSubmit }) {
  const { comments, description, image, user } = post;

  const commentsDisplay = comments.map((comment) => (
    <Comment commentData={comment} key={comment.id} />
  ));

  useEffect(() => {
    if (showPostDisplay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPostDisplay]);

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
        </PostSideBar>
      </PostDisplayContent>
    </PostDisplayContainer>
  );
}

export default PostDisplay;
