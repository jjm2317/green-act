import React from 'react';
import './Header.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Header = () => {
  return (

    <header className="appHeader">
      <h1 className="logo">
        <Link to = '/Main'>
          <img src="/images/logo.png" alt="green Act" />
        </Link>
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
          <div className="link-box link-box--default">
            <Link to='/Login'>로그인</Link>
          </div>
        </li>
        <li>
          <div className="link-box link-box--green">
            <Link to='/Signup'>회원가입</Link>
          </div>
        </li>
      </ul>

    </header>


  );
};

export default Header;
