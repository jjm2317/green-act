import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="appHeader">
      <h1 className="logo">
        <a href="index.html">
          <img src="/images/logo.png" alt="green Act" />
        </a>
      </h1>
      <nav className="appNavigation menu">
        <h2 className="a11yHidden">메인 메뉴</h2>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#">분리수거</a>
          </li>
          <li className="menu__item">
            <a href="#">게시판</a>
          </li>
          <li className="menu__item">
            <a href="#">뉴스</a>
          </li>
          <li className="menu__item">
            <a href="#">캠페인</a>
          </li>
        </ul>
      </nav>
      <ul className="member">
        <li>
          <div className="link-box">
            <a>로그인</a>
          </div>
        </li>
        <li>
          <div className="link-box">
            <a>회원가입</a>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
