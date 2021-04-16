import React from 'react';
import './Waste.scss';
import sep_plastic from "./json/sep_plastic";
import gen_plastic from "./json/gen_plastic";

//for, map반복문으로 바꿔서 작성
export default function PlasticWaste() {
  const sep_1 = sep_plastic.filter(function(data){return data.id=="1"});
  const sep_2 = sep_plastic.filter(function(data){return data.id=="2"});
  const sep_3 = sep_plastic.filter(function(data){return data.id=="3"});
  const sep_4 = sep_plastic.filter(function(data){return data.id=="4"});
  const sep_5 = sep_plastic.filter(function(data){return data.id=="5"});
  
  const gen_1 = gen_plastic.filter(function(data){return data.id=="1"});
  const gen_2 = gen_plastic.filter(function(data){return data.id=="2"});
  const gen_3 = gen_plastic.filter(function(data){return data.id=="3"});
  const gen_4 = gen_plastic.filter(function(data){return data.id=="4"});
  
  return (
    <section className="Waste">
      <section className="top">
        <div className="title">
          <div className="title-text">플라스틱</div>
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
          <div className="item-mid arrow-six">
            <div className="title">{sep_1[0].CLASS} - 분리수거</div>
            <div className="content">
              {sep_1[0].CONTENTS}<br/>
              Tip! {sep_1[0].NOTE}
            </div>
          </div>
          <div className="item-short arrow-seven">
          <div className="title">{gen_1[0].CLASS} - 불가</div>
            <div className="content">{gen_1[0].CONTENTS}
            <br/>Tip! {gen_1[0].NOTE}</div>
          </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
            <div className="title">{sep_2[0].CLASS} - 분리수거</div>
            <div className="content">
                <div>{sep_2[0].CONTENTS} Tip! {sep_2[0].NOTE}</div>
            </div>
          </div>
          <div className="item-short arrow-seven">
            <div className="title">{gen_2[0].CLASS} - 불가</div>
                <div className="content">{gen_2[0].CONTENTS}
          </div> 
        </div>
        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_3[0].CLASS} - 분리수거</div>
            <div className="content">{sep_3[0].CONTENTS}
            <br/>Tip! {sep_3[0].NOTE}</div>
          </div>
          <div className="item-mid arrow-six">
            <div className="title">{gen_3[0].CLASS} - 불가</div>
                <div className="content">
                {gen_3[0].CONTENTS}
                <br/>Tip! {gen_3[0].NOTE}</div>
          </div> 
        </div>
        {/* 네 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_4[0].CLASS} - 분리수거</div>
            <div className="content">{sep_4[0].CONTENTS}
            <br/>Tip! {sep_4[0].NOTE}</div>
          </div>
          <div className="item-mid arrow-six">
            <div className="title">{gen_4[0].CLASS} - 불가</div>
                <div className="content">
                {gen_4[0].CONTENTS}
                <br/>Tip! {gen_4[0].NOTE}</div>
          </div> 
        </div>
        {/* 다섯 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_5[0].CLASS} - 분리수거</div>
            <div className="content">Tip! {sep_5[0].NOTE}</div>
          </div>
          {/* 공란으로 출력되야함 */}
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>


      </section>
    </section>
  );
};

