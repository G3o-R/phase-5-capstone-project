import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Error
} from "../styles/LoginStyles";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearErrors } from "../redux/features/userSlice";

function Login() {
  const { errors } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
    dispatch(loginUser(loginData));
    setLoginData({
      username: "",
      password: "",
    });
    navigate("/");
  }

  function navigateToSignUp(e) {
    navigate("/sign-up")
    dispatch(clearErrors())
  }

  const showButton = (
    <ButtonContainer>
      {password.length > 0 ? (
        <ShowButton type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </ShowButton>
      ) : null}
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
                autoComplete="false"
                onChange={handleChange}
              />
              {showButton}
            </FormGroup>
            <SubmitButton type="submit">Log in</SubmitButton>
          </LoginForm>
          {errors.map((error) => (
            <Error key={error}>{error}</Error>
          ))}
        </FormContainer>
        <SignUpContainer>
          <span>
            Don't have an account?
            <SignUpLink onClick={(e)=>navigateToSignUp(e)}>Sign up</SignUpLink>
          </span>
        </SignUpContainer>
      </ContainerWrapper>
    </LoginPage>
  );
}

export default Login;
