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

export const OptionsDialogContent = styled.div`
  background-color: #fff;
  max-width: 300px;
  width: 100%;
  border-radius: 4px;
  position: relative;
  padding: 20px;
`;

