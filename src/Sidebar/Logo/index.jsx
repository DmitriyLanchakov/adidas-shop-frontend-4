import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoLg from './logo.svg';
import logoXs from './logo-xs.svg';

const LogoWrapper = styled(Link)`
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 575px) {
    margin: 17px 15px;
  }
`;

const logo = window.outerWidth <= 575 ? logoXs : logoLg;

export default () => (
  <LogoWrapper to="/">
    <img src={logo} alt="logo" />
  </LogoWrapper>
);
