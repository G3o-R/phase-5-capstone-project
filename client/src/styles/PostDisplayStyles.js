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
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: row; 
  margin-left: 3rem;
  margin-right: 3rem;

  @media screen and (min-width:1200px){
    height:100%;
  }
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
  max-height: 100%;
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
  padding-left:0px;
  height:auto;
  width:auto;
  flex-basis: 1267px;
  aspect-ratio: 1/1;
  align-content: center;
  background-color: black;
`;

export const AddCommentTextPostDisplay = styled.form`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  height:auto;

  textarea {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
    resize: none;
    height: fit-content;
    overflow-y: auto;
  }

  button {
    background-color: #0084ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #005bb5;
    }
  }
`;

const CustomTextarea = styled.textarea`
  appearance: none;
  block-size: 54px;
  border-block-end-color: rgb(204, 208, 213);
  border-block-end-style: none;
  border-block-end-width: 0px;
  border-block-start-color: rgb(204, 208, 213);
  border-block-start-style: none;
  border-block-start-width: 0px;
  border-inline-end-color: rgb(204, 208, 213);
  border-inline-end-style: none;
  border-inline-end-width: 0px;
  border-inline-start-color: rgb(204, 208, 213);
  border-inline-start-style: none;
  border-inline-start-width: 0px;
  box-sizing: content-box;
  display: flex;
  height: 54px;
  inline-size: 182.828px;
  max-block-size: 80px;
  max-height: 80px;
  max-inline-size: 100%;
  max-width: 100%;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  padding-block-end: 0px;
  padding-block-start: 0px;
  padding-inline-end: 0px;
  padding-inline-start: 0px;
  perspective-origin: 91.4062px 27px;
  resize: none;
  transform-origin: 91.4141px 27px;
  unicode-bidi: isolate;
  width: 182.828px;
  border: 0px none rgb(204, 208, 213);
  flex: 1 1 auto;
  font: 14px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 0px;

  &:after {
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;
    border-start-end-radius: 6px;
    display: block;
    border-radius: 0px 6px 6px;
    font: 14px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  &:before {
    display: block;
    font: 14px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
`;