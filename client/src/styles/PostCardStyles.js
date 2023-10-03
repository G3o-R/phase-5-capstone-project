import styled from "styled-components";
import { ReactComponent as LikeSVG } from "../images/Like.svg";
import { ReactComponent as CommentSVG } from "../images/Comment.svg";

export const PostCardContainer = styled.div`
  border-radius: 1px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
  width: 30rem;
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  border-bottom: 1px solid #ddd;
`;


export const UserName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const PostContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const BottomPostSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const LikeAndCommentButtons = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

export const LikeButton = styled.button`
  cursor: pointer;
`;

export const CommentButton = styled.button`
  cursor: pointer;
`;

export const Likes = styled.h4`
  font-size: 16px;
  margin-top: 8px;
`;

export const Description = styled.h4`
  font-size: 16px;
  margin-top: 8px;
`;

export const SeeCommentsButton = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
  margin-top: 8px;
`;

export const ViewComments = styled.p`
  cursor: pointer
`;

export const AddCommentText = styled.p`
cursor: pointer
`;
