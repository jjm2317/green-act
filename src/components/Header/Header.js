import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Member from './Member';
import Logo from './Logo';
import styled from 'styled-components';

const AppHeader = styled.header`
  width: 91.667%;
  height: 136px;
  max-width: 1000px;
  // min-width: 800px;
  padding: 0 5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <AppHeader className="appHeader">
      <Logo />
      <Menu />
      <Member />
    </AppHeader>
  );
};

export default Header;
