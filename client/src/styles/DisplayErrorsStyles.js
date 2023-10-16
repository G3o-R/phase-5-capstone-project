import styled from "styled-components";

export const ErrorsContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 1001;
  width: 240px;
  max-height: 400px;
  height: auto;
  padding: 10px;
  margin: 4.5rem;
  border: 1px solid red;
`;

export const Error = styled.h4`
  color: red;
`;
