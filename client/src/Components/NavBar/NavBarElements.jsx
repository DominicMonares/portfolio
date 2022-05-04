import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 50px;
  background: #523F66;
  border-radius: 5px;
  border-style: solid;
  border-width: 10px;
  border-color: #523F66;
`

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 22px;
  font-weight: 300;
  padding: 0 1rem;
  width: 80%;
  height: 100%;
  // border-style: solid;
  // border-width: 1;
  // border-color: #ffffff;
  cursor: pointer;
  &.active {
    color: #523F66;
    background: #ffffff;
    border-radius: 5px;
  }
`
