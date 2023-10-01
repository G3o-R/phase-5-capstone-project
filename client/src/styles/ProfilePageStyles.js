import styled from "styled-components";
import { Link } from "react-router-dom";


export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const PostRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const PostsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const Post = styled.div`
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostLink = styled(Link)`
  width:100%;
  height: 100%;
  object-fit: cover
`;


export const ProfileHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 70px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const EditProfileButton = styled.button`
  background-color: transparent;
  border: 1px solid #007fff;
  color: #007fff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const ProfileIcon = styled.img`
  &.small {
    width: 32px;
    height: 32px;
  }

  &.medium {
    width: 64px;
    height: 64px;
  }

  &.big {
    width: 96px;
    height: 96px;
  }
`;