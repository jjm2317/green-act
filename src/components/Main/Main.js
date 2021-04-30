import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Bestboard from './Bestboard';
import Category from './Category';
import './Main.scss';
import News from './News';
import Recycle from './Recycle';
import Search from './Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    // <Router>
    <main className="appMain">
      <Search />
      <Category />
      <Recycle />
      <Bestboard />
      {/* 뉴스 섹션 밖에 뉴스/캠페인 제목 텍스트 추가*/}
      <div className="title-news">뉴스</div>
      <div className="title-campaign">캠페인</div>
      <News />
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
    </main>
    // </Router>
  );
};

export default Main;
