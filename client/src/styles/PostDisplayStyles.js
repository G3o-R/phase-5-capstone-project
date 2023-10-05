import styled from "styled-components";

export const PostDisplayContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const PostDisplayContent = styled.div`
  background-color: #fff;
  max-width: 1770px;
  max-height: calc(100% - 40px);
  width:auto;
  height:100%;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: row; 
  margin-left: 3rem;
  margin-right: 3rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #888;
`;

export const PostImage = styled.img`
  max-width: 100%;
  max-height: 1267px;
  height:auto;
  width: 100%;
  object-fit: contain;
`;

export const PostSideBar = styled.div`
  align-items: stretch;
  border:0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 2;
  font-size: 100%;
  margin: 0;
  max-width:500px;
  min-width: 405px;
  padding:0;
  vertical-align: baseline;

  margin-left: 16px;
`;

export const UserInfo = styled.div`
  margin-top: 16px;
  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;

  li {
    margin-bottom: 8px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items:center;
  max-width: 1267px;
  height:100%;
  flex-basis: 1267px;
  aspect-ratio: 1/1;
  align-content: center;
  background-color: black;
`;

