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
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  /* Add styles for the title here */
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
`;

export const SignUpButton = styled.button`
  /* Add styles for the sign-up button here */
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;