import React from 'react';
import './StyrofoamTrash.scss';
import sep_styrofoam from "./json/sep_styrofoam";
import gen_styrofoam from "./json/gen_styrofoam";

//for, map반복문으로 바꿔서 작성
export default function StyrofoamTrash() {
  const sep_box = sep_styrofoam.filter(function(data){return data.Class=="박스형 스티로폼"});
  const sep_plate = sep_styrofoam.filter(function(data){return data.Class=="접시형 스티로폼"});
  const sep_wan = sep_styrofoam.filter(function(data){return data.Class=="완충제"});
  const gen_spon = gen_styrofoam.filter(function(data){return data.Class=="스펀지 형태"});
  const gen_oyum = gen_styrofoam.filter(function(data){return data.Class=="오염된 스티로폼"});
  const gen_comb = gen_styrofoam.filter(function(data){return data.Class=="다른 물질과 결합된 스티로폼"});
  const gen_gun = gen_styrofoam.filter(function(data){return data.Class=="건축 자재용 스티로폼"});


  return (
    <section className="StyrofoamTrash">
      <section className="top">
        <div className="title">
          <div className="title-text">스티로폼</div>
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
          <div className="item-short arrow-four">
            <div className="title">{sep_box[0].Class} - 분리수거</div>
            <div className="content">
              {sep_box[0].Contents}<br/>
              Tip! {sep_box[0].Note}
            </div>
          </div>
          <div className="item-long arrow-six">
          <div className="title">{gen_spon[0].Class} - 분리수거 불가</div>
            <div className="content">{gen_spon[0].Characteristics}
            <br/>Tip! {gen_spon[0].Note}</div>
          </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-four">
            <div className="title">{sep_plate[0].Class} - 분리수거</div>
            <div className="content">
                <div>{sep_plate[0].Contents} Tip! {sep_plate[0].Note}</div>
            </div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">{gen_oyum[0].Class} - 분리수거 불가</div>
                <div className="content">{gen_oyum[0].Characteristics}
                <br/>{gen_oyum[1].Characteristics}<br/>{gen_oyum[2].Characteristics}</div>
          </div> 
        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-three">
          <div className="title">{sep_wan[0].Class} - 분리수거</div>
            <div className="content">{sep_wan[0].Contents}{sep_wan[0].Note}</div>
          </div>
          <div className="item-long arrow-two">
            <div className="title">{gen_comb[0].Class} - 분리수거 불가</div>
                <div className="content">
                {gen_comb[0].Contents}
                <br/>{gen_comb[1].Contents} Tip! {gen_comb[1].Note}</div>
          </div> 
        </div>

      </section>
    </section>
  );
};

