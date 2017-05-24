import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import NavLink from './NavLink';
import Submenu from './Submenu';

const Sidebar = styled.aside`
  min-width: 414px;
  background-color: #0e0e0e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: AvenirNextBold;
  font-size: 24px;
`;

const Nav = styled.nav`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Nav>
      <Submenu title="football">
        <NavLink to="/football/shoes">SHOES</NavLink>
        <NavLink to="/football/clothing">CLOTHING</NavLink>
        <NavLink to="/football/accesories">ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="running">
        <NavLink to="/running/shoes">SHOES</NavLink>
        <NavLink to="/running/clothing">CLOTHING</NavLink>
        <NavLink to="/running/accesories">ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="basketball">
        <NavLink to="/basketball/shoes">SHOES</NavLink>
        <NavLink to="/basketball/clothing">CLOTHING</NavLink>
        <NavLink to="/basketball/accesories">ACCESORIES</NavLink>
      </Submenu>
    </Nav>
  </Sidebar>
);
