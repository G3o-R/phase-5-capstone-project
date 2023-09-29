import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

export const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  height: 100vh;
  max-width: 336px;
  min-width: 200px;
  background-color: #007fff;
  color: white;
  padding: 20px;
  z-index: 1;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 30px;
  height: 100%;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;

  &.active {
    font-weight: bold;
    color: black;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding-bottom: 3rem;
  margin: 0;
`;

export const LoginButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding-bottom: 3rem;
  margin: 0;
`

export const AppName = styled.div`
  font-size: 30px;
  padding-top:15px;
  margin-bottom: 10px;
`;