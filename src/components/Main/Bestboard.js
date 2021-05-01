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
      <div className="item">
        <div className="item-photo"></div>
        <div className="item-id">green_123</div>
        <div className="item-content">오늘 분리수거한 사진 인증합니다! ...</div>
      </div>
      <div className="item">
        <div className="item-photo"></div>
        <div className="item-id">earth_99</div>
        <div className="item-content">일회용품 안 나오는 배달 서비스가 나왔는데...</div>
      </div>
      </div>
      <Link to='/board'>
      <div className="button">게시판 바로가기</div>
      </Link>
    </div>
  );
};
export default Bestboard;
