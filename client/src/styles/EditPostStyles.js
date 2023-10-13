// EditPostStyles.js

import styled from 'styled-components';

export const EditPostDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Higher z-index to appear above PostOptionsDisplay */
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const EditPostContainer = styled.div`
  background-color: #fff;
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  button {
    font-size: 16px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #888;
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }
`;

export const FormContainer = styled.div`
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    height: fit-content;
    overflow-y: auto;
  }
`;
