// LoginStyles.js
import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  border: 1px solid #dbdbdb; /* Darker border color */
  border-radius: 0; /* No border radius for sharp corners */
  max-width: 350px;
  aspect-ratio: 7/9;
  margin: 0 auto;
`;

export const LoginForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #f7f7f7; /* Grey background color */
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
