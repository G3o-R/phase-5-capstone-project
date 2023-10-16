import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContainerWrapper = styled.div`
  height:100%;
  padding-top:6rem;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column ;
  aspect-ratio: 1/2;
  max-width: 350px ;
  flex-grow:1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  align-items:center;
`;

export const LoginContainer = styled.div`
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
  padding-top: 1px;
  padding-bottom: 1px;
`;

export const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 90%;
  padding-right:15px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color: #f7f7f7;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  background-color: #f7f7f7;
  &:focus{
    outline:none;
  }
`;

export const SignUpButton = styled.button`
  margin-top: 5px;
  width: 107%;
  padding: 10px;
  background-color: #4cb5f9;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #3385ff;
  }
`;

export const LoginLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-top: 0;
`;
export const Error = styled.h4`
  color: red;
  margin:10px;
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