import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/features/userSlice";
import {
  StyledNavBar,
  NavLinks,
  NavLink,
  LogoutButton,
} from "../styles/NavBarStyles"; // Import styles from NavBarStyles.js

function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  function handleLogOut() {
    dispatch(logOutUser());
  }

  return (
    <StyledNavBar>
        <div name="app-name">
            CodeGram
        </div>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </NavLinks>
      {user ? (
        <LogoutButton onClick={handleLogOut}>Log Out</LogoutButton>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </StyledNavBar>
  );
}

export default NavBar;