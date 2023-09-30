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
