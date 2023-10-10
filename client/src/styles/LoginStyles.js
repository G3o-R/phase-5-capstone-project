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
// I want the input to not have a border even when focused on and I want the
// the width of the form group to stay the same width no matter if the ShowButton is being displayed or not
// do this by either decreasing the width of the input field when ShowButton is being displayed,
// giving the buttonContainer a set width to account for the width of the inner text
// or however you see fit  
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
