import React, { useState, useEffect, useRef } from "react";
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
import { ReactComponent as HomeSVG } from "../images/Home.svg";
import { ReactComponent as Create } from "../images/Create.svg";
import { ReactComponent as More } from "../images/Settings.svg";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [showMore, SetShowMore] = useState(false);
  const moreTabRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (moreTabRef.current && !moreTabRef.current.contains(event.target)) {
        SetShowMore(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function handleLogOut() {
    dispatch(logOutUser());
    navigate("/login");
  }

  return (
    <>
      <StyledNavBar>
        <AppName>CodeGram</AppName>
        <NavLinks>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            <HomeSVG /> Home
          </NavLink>
          <NavLink
            to="/create-post"
            className={location.pathname === "/create-post" ? "active" : ""}
          >
            <Create /> Create
          </NavLink>
          <NavLink
            to={`/profile/${user.username}`}
            className={
              location.pathname === `/profile/${user.username}` ? "active" : ""
            }
          >
            Profile
          </NavLink>
        </NavLinks>
        <MoreContainer onClick={() => SetShowMore(!showMore)} ref={moreTabRef}>
          <More className="more-btn" /> More
          <MoreTab className={showMore ? "active" : "inactive"} ref={moreTabRef}>
            <LogoutButton onClick={handleLogOut} className="btns">
              Log Out
            </LogoutButton>
          </MoreTab>
        </MoreContainer>
      </StyledNavBar>
    </>
  );
}

export default NavBar;
