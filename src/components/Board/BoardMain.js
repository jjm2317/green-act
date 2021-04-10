import React from 'react';
import './BoardMain.scss';

const BoardMain = () => {
  return (
    <div className="Board">
      <section className="top">
        <form className="board_form">
          <input className="searchbar" placeholder="# 분리수거 Tip # 서울시 분리수거"></input>
          <button className="button">검색</button>
        </form>
      </section>
      <section className="bottom">
      </section>
    </div>
  );
};

export default BoardMain