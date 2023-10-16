import styled from "styled-components";

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
  width: 930px;
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

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 70px;
  border-bottom: 1px solid black;
  width:50VW;
`;

export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AddPostButton = styled.button`
  background-color: transparent;
  border: 1px solid #007fff;
  color: #007fff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  width: 120px;
`;

export const SmallText = styled.h2`
  font-weight: 150;
  font-size: 30px;
  margin: 0;
  margin-top:auto;
`;

export const InlineFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  h1{
    margin:0;
    padding:0;
    font-size: 50px;
  }
`;
