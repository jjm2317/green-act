import React from 'react';
import './Bestboard.scss';
const Bestboard = () => {
  return (
    <div className="bestboard">
      <h1 className="title">게시판 BEST</h1>
      <h2 className="subtitle">
        게시판을 통해서 분리수거에 대한 궁금한 점도 물어보고 다양한 사람들과
        소통을 해보세요!
      </h2>
      <div className="frame">
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="button">게시판 바로가기</div>
    </div>
  );
};
export default Bestboard;
