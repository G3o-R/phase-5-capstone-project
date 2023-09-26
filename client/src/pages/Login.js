// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LoginPage,
  ContainerWrapper,
  FormContainer,
  LoginForm,
  Title,
  FormGroup,
  Input,
  SubmitButton,
  SignUpContainer,
  SignUpLink,
} from "../styles/LoginStyles";

function Login() {
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
    console.log(loginData)

  }

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
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password..."
              onChange={handleChange}
            />
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
