import React, { useState } from "react";
import {
  LoginPage,
  FormContainer,
  LoginForm,
  Title,
  FormGroup,
  Input,
  SubmitButton,
} from "../styles/LoginStyles"

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
    console.log(loginData);
  }

  return (
    <LoginPage>
      <FormContainer>
        <LoginForm onSubmit={handleLoginSubmit}>
          <Title>Login</Title>
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
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>
      </FormContainer>
    </LoginPage>
  );
}

export default Login;