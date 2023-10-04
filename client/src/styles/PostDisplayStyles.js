import styled from "styled-components";

export const PostDisplayContainer = styled.div`
  /* Your styles for the container here */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Ensures the component appears above other content */
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const PostDisplayContent = styled.div`
  /* Your styles for the content here */
  background-color: #fff;
  max-width: 600px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  position: relative;
  display: flex; /* Display content in a row direction */
  flex-direction: row; /* Display content in a row direction */
`;

export const CloseButton = styled.button`
  /* Your styles for the close button here */
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #888;
`;

export const PostImage = styled.img`
  /* Your styles for the post image here */
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const PostSideBar = styled.div`
  /* Your styles for the sidebar here */
  flex: 1; /* Take up available space */
  display: flex;
  flex-direction: column; /* Display content in a column direction */
  margin-left: 16px; /* Add margin for spacing */
`;

export const UserInfo = styled.div`
  /* Your styles for user info here */
  margin-top: 16px;
  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const CommentsList = styled.ul`
  /* Your styles for comments list here */
  list-style: none;
  padding: 0;
  margin-top: 16px;

  /* Style individual comment items (li) if needed */
  li {
    margin-bottom: 8px;
    /* Add your styles for comments here */
  }
`;

export const ImageContainer = styled.div`
  max-width: fit-content;
  height: 100%;
`;

