import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  height:25rem;
  width:15rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #007fff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
`;