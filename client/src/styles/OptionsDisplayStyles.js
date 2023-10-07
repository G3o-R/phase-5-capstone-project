import styled from "styled-components";

export const OptionsDisplayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
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

export const OptionsContent = styled.div`
    display: flex;
    justify-content: center;
    max-width: 400px;
    width:100%;
    flex-flow: column nowrap;
    position: relative;
    overflow:hidden;

    .delete{
        color:rgb(237, 73, 86);
        border: 1px solid #ccc;
        border-radius: 24px 24px 0px 0px; 

    }

    .cancel{
        border: 1px solid #ccc;
        border-radius: 0px 0px 24px 24px; 

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

export const Option = styled.button`
  overflow: hidden;
  background-color: #fff;
  border: none;
  font-weight: 700;
  width:100%;
  height:40px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    background-color: #fff; /* Set the background color to #fff on hover */
  }
  &:focus {
    outline: none; /* Remove the default focus outline */
  }
`;
