import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;



export const ContainerWrapper = styled.div`
  height:100%;
  padding-top:6rem;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items:center;
  flex-grow: 1;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  max-width: 350px;
  aspect-ratio: 7/9;
  margin: 0 auto;
`;

export const LoginForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
`;

export const Error = styled.h4`
  color: red;
  justify-self:center;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color: #f7f7f7;
`;

export const ButtonContainer = styled.div`
  width:40px;
  margin-right:15px;

`;

export const ShowButton = styled.button`
  border:none;
  background:transparent;
  padding-right:10px;
  cursor: pointer;
  &:hover{
    opacity:.5;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 3px;
  background:transparent;
  &:focus {
    outline:none;
  }
`;

export const SubmitButton = styled.button`
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

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 0;
  width: 350px;
  aspect-ratio: 8/1;
  margin: 10px auto;
  padding-top:1px;
  padding-bottom:1px;
`;

export const SignUpLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-top:0;
`;
