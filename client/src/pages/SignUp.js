import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerWrapper,
  SignUpPage,
  SignUpContainer,
  Title,
  Form,
  InputField,
  SignUpButton,
  LoginLink,
  LoginContainer,
  Error
} from "../styles/SignUpStyles.js";

import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/features/userSlice.js";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state)=>state.user)

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { username, email, password, password_confirmation } = signupData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setSignupData({ ...signupData, [name]: value });
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    dispatch(signUpUser(signupData))
  }

  return (
    <SignUpPage>
      <ContainerWrapper>
        <SignUpContainer>
          <Title>CodeGram</Title>
          <Form onSubmit={handleSignUpSubmit}>
            <InputField
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <SignUpButton type="submit">Sign Up</SignUpButton>
          </Form>
          {errors.map((error)=> <Error>{error}</Error>)}
        </SignUpContainer>

        <LoginContainer>
          <span>
            Have an Account? <LoginLink to="/">Log In</LoginLink>
          </span>
        </LoginContainer>
      </ContainerWrapper>
    </SignUpPage>
  );
}

export default SignUp;
