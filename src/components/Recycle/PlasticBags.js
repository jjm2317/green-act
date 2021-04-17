import React from 'react';
import './Waste.scss';
import sep_plasticbags from "./json/sep_plasticbag";
import gen_plasticbags from "./json/gen_plasticbag";

//for, map반복문으로 바꿔서 작성
export default function PlasticBags() {
    const sep_bnpa = sep_plasticbags.filter(function(data){return data.Class=="비닐로 코팅된 종이"});
    const sep_emool = sep_plasticbags.filter(function(data){return data.Class=="이물질이 묻은 비닐"});
    const sep_onetime = sep_plasticbags.filter(function(data){return data.Class=="일회용품"});
    const gen_bnpa = gen_plasticbags.filter(function(data){return data.Class=="비닐로 코팅된 종이"});
    const gen_oyum = gen_plasticbags.filter(function(data){return data.Class=="오염된 비닐"});
    const gen_comb = gen_plasticbags.filter(function(data){return data.Class=="비닐과 다른 재질이 합쳐진 경우"});
    const gen_pvc = gen_plasticbags.filter(function(data){return data.Class=="PVC 소재"});


  return (
    <section className="Waste">
      <section className="top">
        <div className="title">
          <div className="title-text">비닐</div>
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
            <div className="title">{sep_bnpa[0].Class} - 분리수거</div>
            <div className="content">
              {sep_bnpa[0].Characteristics}<br/>
              Tip! {sep_bnpa[0].Note}
            </div>
          </div>
          <div className="item-long arrow-six">
          <div className="title">{gen_bnpa[0].Class} - 분리수거 불가</div>
            <div className="content">
              {gen_bnpa[0].Characteristics}<br/>
              Tip! {gen_bnpa[0].Note}
          </div>
        </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-four">
            <div className="title">{sep_emool[0].Class} - 분리수거</div>
            <div className="content"> Tip! {sep_emool[0].Note}
            </div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">{gen_oyum[0].Class} - 분리수거 불가</div>
            <div className="content"> Tip! {gen_oyum[0].Note}
          </div> 
        </div>
        </div>
        <div className="Line">
          <div className="item-short arrow-four">
          <div className="title">{sep_onetime[0].Class} - 분리수거</div>
            <div className="content">{sep_onetime[0].Contents}{sep_onetime[0].Note}</div>
          </div>
          <div className="item-long arrow-two">
            <div className="title">{gen_comb[0].Class} - 분리수거 불가</div>
                <div className="content">
                {gen_comb[0].Contents} Tip! {gen_oyum[0].Note}
                <br/>{gen_pvc[0].Class} - {gen_pvc[0].Contents}
                </div>
          </div> 
        </div>

    </section>
    </section>
  );
};

