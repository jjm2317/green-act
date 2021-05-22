import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  width: 30%;
  height: 56px;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  list-style: none;
  padding-left: 0;
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const Menu = () => {
  return (
    <Navigation className="appNavigation menu">
      <h2 className="a11yHidden">메인 메뉴</h2>
      <MenuList className="menu__list">
        <li className="menu__item">
          <Link to="/recycle/GeneralWaste">분리수거</Link>
        </li>
        <li className="menu__item">
          <Link to="/board">게시판</Link>
        </li>
        <li className="menu__item">
          <Link to="/news">뉴스/캠페인</Link>
        </li>
      </MenuList>
    </Navigation>
  );
};

export default Menu;
