import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  max-width:336px;
  min-width: 200px;
  background-color: #007FFF;
  color: white;
  padding: 20px;
  z-index: 1;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
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