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
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const EditPostContainer = styled.form`
  background-color: #fff;
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  padding: 16px;
  min-height: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  button {
    font-size: 18px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #888;

    &:hover{
        color: #3385ff;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 475px;
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  box-sizing: border-box;
  min-height: 50px;

  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    height: 24px;
    font-size:16px;
    overflow-y: auto;
    line-height:1;
  }
`;
