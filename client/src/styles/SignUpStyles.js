import styled from 'styled-components';

export const SignUpPage = styled.div`
  /* Add styles for the entire sign-up page here */
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpContainer = styled.div`
  /* Add styles for the sign-up container here */
  display: flex;
  flex-direction: column ;
  aspect-ratio: 1/2;
  max-width: 350px ;
  flex-grow:1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
`;

export const Title = styled.h1`
  /* Add styles for the title here */
  margin-top: 100px;
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  /* Add styles for the form here */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputField = styled.input`
  /* Add styles for the input fields here */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f7f7f7;
`;

export const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CB5F9;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #3385ff;
  }
`;