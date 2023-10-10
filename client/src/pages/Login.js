import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginPage,
  ContainerWrapper,
  FormContainer,
  LoginForm,
  Title,
  FormGroup,
  ShowButton,
  ButtonContainer,
  Input,
  SubmitButton,
  SignUpContainer,
  SignUpLink,
} from "../styles/LoginStyles";

import { useDispatch } from "react-redux";
import { loginUser } from "../redux/features/userSlice";


function Login() {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(loginData))
    setLoginData({
      username: "",
      password: "",
    });
  }

  const showButton = (
    <ButtonContainer>
      {password.length > 0 ? 
      <ShowButton type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </ShowButton> :
      null
      }
    </ButtonContainer>
  );
  

  return (
    <LoginPage>
    <ContainerWrapper>
      <FormContainer>
        <LoginForm onSubmit={handleLoginSubmit}>
          <Title>CodeGram</Title>
          <FormGroup>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Username..."
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              placeholder="Password..."
              onChange={handleChange}
            />
            {showButton}
          </FormGroup>
          <SubmitButton type="submit">Log in</SubmitButton>
        </LoginForm>
      </FormContainer>
      <SignUpContainer>
        <span>
          Don't have an account? <SignUpLink to="/sign-up">Sign up</SignUpLink>
        </span>
      </SignUpContainer>
        </ContainerWrapper>
    </LoginPage>
  );
}

export default Login;
