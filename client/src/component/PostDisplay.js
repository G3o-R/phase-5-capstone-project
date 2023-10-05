import React from "react";
import {
  PostDisplayContainer,
  PostDisplayContent,
  CloseButton,
  PostImage,
  UserInfo,
  CommentsList,
  ImageContainer,
  PostSideBar
} from "../styles/PostDisplayStyles.js"; // Import the styled components from PostDisplayStyles.js

import Comment from "./Comment";

function PostDisplay({ post, onClose, showPostDisplay }) {
  const { comments, description, image, user } = post;

  const commentsDisplay = comments.map((comment) => (
    <Comment commentData={comment} key={comment.id} />
  ));

  return (
    <PostDisplayContainer
      className={`post-display ${showPostDisplay ? "active" : ""}`}
      // onClick={onClose}
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
        </PostSideBar>
      </PostDisplayContent>
    </PostDisplayContainer>
  );
}

export default PostDisplay;