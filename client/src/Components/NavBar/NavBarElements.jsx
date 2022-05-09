import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 40px;
  background: #3A2E47;
  border-radius: 5px;
  border-style: solid;
  border-width: 10px;
  border-color: #3A2E47;
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
  cursor: pointer;
  &.active {
    color: #3A2E47;
    background: #ffffff;
    border-radius: 5px;
  };
`
