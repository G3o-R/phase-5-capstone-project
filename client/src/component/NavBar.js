import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/features/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledNavBar,
  NavLinks,
  NavLink,
  LogoutButton,
  AppName,
  MoreContainer,
  MoreTab
} from "../styles/NavBarStyles";

import {ReactComponent as HomeSVG} from "../images/Home.svg"
import {ReactComponent as SearchSVG} from "../images/Search.svg"
import {ReactComponent as Create} from "../images/Create.svg"
import {ReactComponent as More} from "../images/Settings.svg"

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [showMore, SetShowMore] = useState(false)

  function handleLogOut() {
    dispatch(logOutUser());
    navigate("/login")
  }

  return (
    <>
    <StyledNavBar>
      <AppName>CodeGram</AppName>
      <NavLinks>
        <NavLink
          to="/"
          className={location.pathname === "/" ? "active" : ""}
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
          to="/create-post"
          className={location.pathname === "/create-post" ? "active" : ""}
        >
          <Create/> Create
        </NavLink>
        <NavLink
          to={`/profile/${user.username}`}
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Profile
        </NavLink>
      </NavLinks>
      <MoreContainer onClick={()=>SetShowMore(!showMore)}>
        <More /> More
      </MoreContainer>
      {showMore ? <MoreTab>
          <LogoutButton onClick={handleLogOut} className="btns">Log Out</LogoutButton>
      </MoreTab> : null}
    </StyledNavBar>
    </>
  );
}

export default NavBar;
