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
        <section className="left">
          <div className="popularBoard">
            <div className="headline">
              <div className="title">인기 게시물</div>
              <button className="more">더보기</button>
            </div>
          </div>
          <div className="recentBoard">
            <div className="headline">
              <div className="title">최근 게시물</div>
              <button className="more">더보기</button>
            </div>
          </div>

        </section>
        <section className="right">
          <div className="mypage-box">
            <div className="myarticle">
              <div className="myarticle_image"></div>
              내가 쓴 글
              <div className="article_number">n</div>
            </div>
            <div className="myscrap">
              <div className="myscrap_image"></div>
              스크랩
              <div className="scrap_number">n</div>
            </div>
            <div className="mycomment">
              <div className="mycomment_image"></div>
              댓글 단 글
              <div className="comment_number">n</div>
            </div>
          </div>
          <div className="category-box">

          </div>

        </section>
      </section>

    </div>
  );
};

export default BoardMain