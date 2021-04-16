import React from 'react';
import './Waste.scss';
import sep_paper from "./json/sep_paper";
import gen_paper from "./json/gen_paper";

//for, map반복문으로 바꿔서 작성
export default function Waste() {
  const sep_golpan = sep_paper.filter(function(data){return data.Class=="골판지류"});
  const sep_book = sep_paper.filter(function(data){return data.Class=="책지류"});
  const sep_pap = sep_paper.filter(function(data){return data.Class=="종이류"});
  const sep_onetime = sep_paper.filter(function(data){return data.Class=="일회용품"});
//   같은 클래스에 여러 CONTENTS가 있는 경우
  const gen_coat = gen_paper.filter(function(data){return data.Class=="코팅 종이"});
  const coatData = gen_coat.map((item)=>{
    return (
        <span>{item.Contents}</span>
    );
  });
  const gen_oyum = gen_paper.filter(function(data){return data.Class=="오염 종이"});
  const oyumData = gen_oyum.map((item)=>{
    return (
        <div>{item.Contents}</div>
    );
  });
  const gen_gam = gen_paper.filter(function(data){return data.Class=="감열지"});
  const gamData = gen_gam.map((item)=>{
    return (
        <span>{item.Contents}</span>
    );
  });
  const gen_imposs = gen_paper.filter(function(data){return data.Class=="재활용이 불가능한 종이류"});
  const impossData = gen_imposs.map((item)=>{
    return (
        <div>{item.Contents}</div>
    );
  });

  return (
    <section className="Waste">
      <section className="top">
        <div className="title">
          <div className="title-text">종이류</div>
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
            <div className="title">{sep_golpan[0].Class} - 분리수거</div>
            <div className="content">
              {sep_golpan[0].Contents}<br/>
              Tip! {sep_golpan[0].Note}
            </div>
          </div>
          <div className="item-long arrow-eight">
          <div className="title">코팅 종이 - 분리수거 불가</div>
            <div className="content">
                {gen_coat[0].Note}{coatData}</div>
          </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-three">
            <div className="title">{sep_book[0].Class} - 분리수거</div>
            <div className="content">
                <div>{sep_book[0].Contents} Tip! {sep_book[0].Note}
                </div>
                <div>{sep_book[1].Contents} Tip! {sep_book[1].Note}
                </div>
                <div>{sep_book[2].Contents} Tip! {sep_book[2].Note}
                </div>
            </div>
          </div>
          <div className="item-long arrow-eight">
          <div className="title">오염 종이 - 분리수거 불가</div>
            <div className="content">{gen_oyum[0].Note}{oyumData}</div>
          </div>

        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-five">
          <div className="title">{sep_pap[0].Class} - 분리수거</div>
            <div className="content">{sep_pap[0].Contents}{sep_pap[1].Contents}</div>
          </div>
          <div className="item-long arrow-eight">
          <div className="title">감열지 - 분리수거 불가</div>
            <div className="content">{gen_gam[0].Note}{gamData}</div>
          </div>
        </div>
        {/* 네 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-one">
          <div className="title">{sep_onetime[0].Class} - 분리수거</div>
            <div className="content">{sep_onetime[0].Contents},{sep_onetime[1].Contents}
            <br/> Tip! {sep_onetime[0].Note}</div>
          </div>
          <div className="item-long arrow-three">
          <div className="title">재활용 불가능 종이류 - 분리수거 불가</div>
            <div className="content">{impossData}</div>
          </div>
        </div>

      </section>
    </section>
  );
};

