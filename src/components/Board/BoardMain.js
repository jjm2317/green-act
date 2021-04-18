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
            <div className="popular-itemList">
              <div className="popular-item">
                <section className="popular-left">
                  <div className="pItem-title">분리배출 tip</div>
                  <div className="pItem-content">게시글 첫 줄...</div>
                </section>
                <section className="popular-right">
                  <div className="pItem-comment">댓글 10</div>
                  <div className="pItem-scrap">스크랩 10</div>
                </section>
              </div>
              <div className="popular-item item-last">
                <section className="popular-left">
                  <div className="pItem-title">분리배출 실천</div>
                  <div className="pItem-content">게시글 첫 줄...</div>
                </section>
                <section className="popular-right">
                  <div className="pItem-comment">댓글 10</div>
                  <div className="pItem-scrap">스크랩 10</div>
                </section>
              </div>
            </div>
          </div>
          <div className="recentBoard">
            <div className="headline">
              <div className="title">최근 게시물</div>
              <button className="more">더보기</button>
            </div>
            <div className="recent-itemList">
              <div className="recent-item">
                <section className="recent-left">
                  <div className="rItem-title">최근 게시물 1</div>
                  <div className="rItem-content">게시글 첫 줄...</div>
                </section>
                <section className="recent-right">
                  <div className="rItem-comment">댓글 10</div>
                  <div className="rItem-scrap">스크랩 10</div>
                </section>
              </div>
              <div className="recent-item item-last">
                <section className="recent-left">
                  <div className="rItem-title">최근 게시물 2</div>
                  <div className="rItem-content">게시글 첫 줄...</div>
                </section>
                <section className="recent-right">
                  <div className="rItem-comment">댓글 10</div>
                  <div className="rItem-scrap">스크랩 10</div>
                </section>
              </div>
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
            <div className="headline">
              <div className="title">카테고리</div>
            </div>
            <div className="item-list">
              <div className="item item-recycle">재활용</div>
              <div className="item item-campaign">캠페인</div>
              <div className="item item-news">뉴스</div>
              <div className="item item-wasteSorting">분리수거</div>
            </div>

          </div>

        </section>
      </section>

    </div>
  );
};

export default BoardMain