import { useState } from "react";
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
  Error,
  FormGroup,
  ButtonContainer,
  ShowButton
} from "../styles/SignUpStyles.js";

import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/features/userSlice.js";

function SignUp() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false)
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

  const showButton = (
    <ButtonContainer>
      {password.length > 0 || password_confirmation.length > 0 ?
      <ShowButton type="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide": "Show"}</ShowButton>
    : null}
    </ButtonContainer>
  )

  return (
    <SignUpPage>
      <ContainerWrapper>
        <SignUpContainer>
          <Title>CodeGram</Title>
          <Form onSubmit={handleSignUpSubmit}>
            <FormGroup>
            <InputField
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleChange}
              />
              </FormGroup>
            <FormGroup>
            <InputField
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              />
              </FormGroup>
              <FormGroup>
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              autoComplete="false"
              onChange={handleChange}
              />
              {showButton}
              </FormGroup>
            <FormGroup>
            <InputField
              type={showPassword ? "text" : "password"}
              name="password_confirmation"
              value={password_confirmation}
              placeholder="Confirm Password"
              autoComplete="false"
              onChange={handleChange}
              />
              {showButton}
              </FormGroup>
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
