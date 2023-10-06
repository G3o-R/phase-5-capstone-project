import styled from "styled-components";

export const Container = styled.div`
  .OPTIONS{
    display: none;
  }
  &:hover{
    .OPTIONS{

      display: flex;
    }

  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const ProfileName = styled.h4`
  font-size: 16px;
  margin: 0;
`;

export const CommentText = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const LikeButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 15px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const LikesDisplay = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 4px;
`;

export const CommentOptions = styled.div`
  justify-content: center;
  padding-top:3px;
  padding-left: 5px
`;

export const BottomOfCommentSection = styled.div`
  display: flex;

`;