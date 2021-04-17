import React from 'react';
import './Waste.scss';
import general from "./json/general";

//for, map반복문으로 바꿔서 작성
export default function GeneralWaste() {
  const id1 = general.filter(function(data){return data.id=="1"});
  const id2 = general.filter(function(data){return data.id=="2"});
  const id3 = general.filter(function(data){return data.id=="3"});
  const id4 = general.filter(function(data){return data.id=="4"});
  const id5 = general.filter(function(data){return data.id=="5"});
  const id6 = general.filter(function(data){return data.id=="6"});
  const id7 = general.filter(function(data){return data.id=="7"});
  const id8 = general.filter(function(data){return data.id=="8"});
  const id9 = general.filter(function(data){return data.id=="9"});
  const id10 = general.filter(function(data){return data.id=="10"});
  //같은 클래스에 여러 CONTENTS가 있는 경우
  //  const one = general.filter(function(data){return data.id=="10"});
  // const oneData = one.map((item)=>{
  //   return (
  //     <p>
  //       <b>
  //         {item.CONTENTS}
  //       </b>
  //     </p>
  //   );
  // });

  return (
    <section className="Waste">
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
            <div className="title">{id1[0].CLASS}</div>
            <div className="content">
              {id1[0].CONTENTS}
            </div>
          </div>
          <div className="item-long arrow-two">
          <div className="title">{id2[0].CLASS}</div>
            <div className="content">{id2[0].CONTENTS}</div>
          </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-three">
            <div className="title">{id3[0].CLASS}</div>
            <div className="content">{id3[0].CONTENTS}</div>
          </div>
          <div className="item-long arrow-four">
          <div className="title">{id4[0].CLASS}</div>
            <div className="content">{id4[0].CONTENTS}</div>
          </div>

        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-five">
          <div className="title">{id5[0].CLASS}</div>
            <div className="content">{id5[0].CONTENTS}</div>
          </div>
          <div className="item-long arrow-eight">
          <div className="title">{id6[0].CLASS}</div>
            <div className="content">{id6[0].CONTENTS}</div>
          </div>
        </div>
        {/* 네 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-seven">
          <div className="title">{id7[0].CLASS}</div>
            <div className="content">{id7[0].CONTENTS}</div>
          </div>
          <div className="item-long arrow-eight">
          <div className="title">{id8[0].CLASS}</div>
            <div className="content">{id8[0].CONTENTS}</div>
          </div>
        </div>
        {/* 다섯 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-nine">
          <div className="title">{id9[0].CLASS}</div>
            <div className="content">{id9[0].CONTENTS}</div>
          </div>
          <div className="item-short arrow-ten">
          <div className="title">{id10[0].CLASS}</div>
            <div className="content">{id10[0].CONTENTS}</div>
          </div>
        </div>

      </section>
    </section>
  );
};

