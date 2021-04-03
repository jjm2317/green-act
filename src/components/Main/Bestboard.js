import React from 'react';
import './Bestboard.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Bestboard = () => {
  return (
    <div className="bestboard" id="bestboard">
      <h1 className="title">게시판</h1><h1 className="title">BEST</h1>
      <h2 className="subtitle">
        게시판을 통해서 분리수거에 대한 궁금한 점도 물어보고 다양한 사람들과
        소통을 해보세요!
      </h2>
      <div className="item-list">
      <div className="item"></div>
      <div className="item"></div>
      </div>
      <Link to='/board'>
      <div className="button">게시판 바로가기</div>
      </Link>
    </div>
  );
};
export default Bestboard;
