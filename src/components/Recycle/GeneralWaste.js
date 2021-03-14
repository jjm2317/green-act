import React from 'react';
import './GeneralWaste.scss';

const GeneralWaste = () => {
  return (
    <section className="GeneralWaste">
      <section className="top">
        <div className="title">
          <div className="title-text">일반쓰레기</div>
          <div className="title-background"></div>
        </div>
        <div className="search">
          <form className="form">
            <input className="searchbar" placeholder="원하는 품목의 분리수거 방법을 검색해보세요"></input>
            <button className="button">검색</button>
          </form>
        </div>
      </section>
      <section className="bottom">
        {/* 첫 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-one">
            <div className="title">영양과 수분이 없는 것</div>
            <div className="content"></div>
          </div>
          <div className="item-long arrow-two">
            <div className="title">딱딱하거나 뾰족하여 목에 걸릴 위험이 있는 것</div>
            <div className="content"></div>
          </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-three">
            <div className="title">염분이 많은 장류</div>
            <div className="content"></div>
          </div>
          <div className="item-long arrow-four">
            <div className="title">포화지방산이 많아 섭취 시 비만을 일으킬 수 있는 것</div>
            <div className="content"></div>
          </div>

        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-five">
            <div className="title">독성이 있는 것</div>
            <div className="content"></div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">재활용 불가능한 합성수지류</div>
            <div className="content"></div>
          </div>
        </div>
        {/* 네 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-seven">
            <div className="title">재활용 불가능한 금속캔, 고철류</div>
            <div className="content"></div>
          </div>
          <div className="item-long arrow-eight">
            <div className="title">재활용 불가능한 유리병류</div>
            <div className="content"></div>
          </div>
        </div>
        {/* 다섯 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-nine">
            <div className="title">인쇄 종이</div>
            <div className="content"></div>
          </div>
          <div className="item-short arrow-ten">
            <div className="title">그 외</div>
            <div className="content"></div>
          </div>
        </div>

      </section>
    </section>
  );
};

export default GeneralWaste;