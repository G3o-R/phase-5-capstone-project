import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/features/userSlice";
import {
  StyledNavBar,
  NavLinks,
  NavLink,
  LogoutButton,
  AppName,
  LoginButton,
} from "../styles/NavBarStyles"; 

import {ReactComponent as Home} from "../images/Home.svg"
import {ReactComponent as Search} from "../images/Search.svg"
import {ReactComponent as Explore} from "../images/Explore.svg"

function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  function handleLogOut() {
    dispatch(logOutUser());
  }

  return (
    <StyledNavBar>
      <AppName>CodeGram</AppName>
      <NavLinks>
        <NavLink to="/"> <Home/> Home</NavLink>
        <NavLink to="/search"> <Search /> Search</NavLink>
        <NavLink to="/explore"> <Explore /> Explore</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </NavLinks>
      {user ? (
        <LogoutButton onClick={handleLogOut}>Log Out</LogoutButton>
      ) : (
        <LoginButton to="/login">Login</LoginButton>
      )}
    </StyledNavBar>
  );
}

export default NavBar;
