import styled from "styled-components";

export const PostCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
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
