import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/features/userSlice";
import { useLocation } from "react-router-dom";
import {
  StyledNavBar,
  NavLinks,
  NavLink,
  LogoutButton,
  LoginButton,
  AppName
} from "../styles/NavBarStyles";

import {ReactComponent as HomeSVG} from "../images/Home.svg"
import {ReactComponent as SearchSVG} from "../images/Search.svg"
import {ReactComponent as ExploreSVG} from "../images/Explore.svg"

function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  function handleLogOut() {
    dispatch(logOutUser());
  }

  return (
    <StyledNavBar>
      <AppName>CodeGram</AppName> {/* Use AppName for app name */}
      <NavLinks>
        <NavLink
          to="/"
          className={location.pathname === "/" ? "active" : ""} // Apply "active" class based on location
        >
          <HomeSVG/> Home
        </NavLink>
        <NavLink
          to="/search"
          className={location.pathname === "/search" ? "active" : ""}
        >
          <SearchSVG/> Search
        </NavLink>
        <NavLink
          to="/explore"
          className={location.pathname === "/explore" ? "active" : ""}
        >
          <ExploreSVG/> Explore
        </NavLink>
        <NavLink
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Profile
        </NavLink>
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
