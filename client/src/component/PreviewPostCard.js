import React from "react";
import {
  PreviewPostCardContainer,
  PreviewUserName,
  PreviewPostContainer,
  PreviewBottomPostSection,
  PreviewLikeAndCommentButtons,
  PreviewLikeButton,
  PreviewLikes,
  PreviewDescription,
  PreviewSeeCommentsButton,
  PreviewAddCommentText,
  PreviewViewComments,
  PreviewCommentButton,
} from "../styles/PreviewPostCardStyles";
import { useSelector } from "react-redux";

import placeholderImage from "../images/default-placeholder.png";
import { ReactComponent as LikeSVG } from "../images/Like.svg";
import { ReactComponent as CommentSVG } from "../images/Comment.svg";

function PreviewPostCard({ postData }) {
  const { image, description } = postData;
  const { user } = useSelector((state) => state.user);

  const imageContent = image ? image : placeholderImage;

  const isValidImage = new Image();
  isValidImage.src = imageContent;

  return (
    <PreviewPostCardContainer name="preview-post-card">
      <PreviewUserName name="preview-users-name">{user.username}</PreviewUserName>
      <PreviewPostContainer name="preview-post-container">
        {isValidImage.complete && isValidImage.height ? (
          <img src={imageContent} alt={`${user.username}'s post`} name="preview-post" />
        ) : (
          <img src={placeholderImage} alt={`${user.username}'s post`} name="preview-post" />
        )}
      </PreviewPostContainer>
      <PreviewBottomPostSection name="preview-bottom-post-section">
        <PreviewLikeAndCommentButtons name="preview-like-and-comment-btns">
          <PreviewLikeButton>
            <LikeSVG />
          </PreviewLikeButton>
          <PreviewCommentButton>
            <CommentSVG />
          </PreviewCommentButton>
        </PreviewLikeAndCommentButtons>
        <PreviewLikes name="preview-likes">0 likes</PreviewLikes>
        <PreviewDescription name="preview-description">{description}</PreviewDescription>
        <PreviewSeeCommentsButton name="preview-see-comments-button">
          <PreviewViewComments>Add a comment</PreviewViewComments>
          <PreviewAddCommentText>
            <input type="text" placeholder="Add a comment.." disabled />
          </PreviewAddCommentText>
        </PreviewSeeCommentsButton>
      </PreviewBottomPostSection>
    </PreviewPostCardContainer>
  );
}

export default PreviewPostCard;
