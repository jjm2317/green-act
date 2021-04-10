import React from 'react';
import './BoardMain.scss';

const BoardMain = () => {
  return (
    <div className="Board">
      <section className="top">
        <form className="board_form">
          <input className="searchbar" placeholder="원하는 품목의 분리수거 방법을 검색해보세요"></input>
          <button className="button">검색</button>
        </form>
      </section>
      <section className="bottom">
      </section>
    </div>
  );
};

export default BoardMain