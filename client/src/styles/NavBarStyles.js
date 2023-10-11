import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background-color: #0c4f83;
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

export const LogoutButton = styled.div`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 0;
`;

export const AppName = styled.div`
  font-size: 30px;
  padding-top:15px;
  margin-bottom: 10px;
`;

export const MoreContainer = styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  padding-bottom: 3rem;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  `;

export const MoreTab = styled.div`
  transition: display 0.3s ease;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 240px;
  position:absolute;
  height: auto;
  justify-content: flex-start;
  background-color: rgba(12,94,152,255);
  border: 1px solid #333;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  margin-bottom:8rem;
  bottom:0;
  left:0;
  margin-left: 30px;

  .btns{
    padding: 10px 0px 10px 15px
  }

`;