import React from 'react';
import './Waste.scss';
import sep_canned from "./json/sep_canned";

//for, map반복문으로 바꿔서 작성
export default function CannedGarbage() {
  const sep_1 = sep_canned.filter(function(data){return data.id=="1"});
  const sep_2 = sep_canned.filter(function(data){return data.id=="2"});
  const sep_3 = sep_canned.filter(function(data){return data.id=="3"});
  const sep_4 = sep_canned.filter(function(data){return data.id=="4"});
  const sep_5 = sep_canned.filter(function(data){return data.id=="5"});
  const sep_6 = sep_canned.filter(function(data){return data.id=="6"});

  return (
    <section className="Waste">
        {/* PlstaicWaste.scss 그대로 사용 */}
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
          <div className="item-long arrow-eight">
            <div className="title">{sep_1[0].CLASS} - 분리수거</div>
            <div className="content">
              {sep_1[0].CONTENTS}<br/>
              Tip! {sep_1[0].NOTE}
            </div>
          </div>
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
            <div className="title">{sep_2[0].CLASS} - 분리수거</div>
            <div className="content">
                <div>{sep_2[0].CONTENTS}</div>
            </div>
          </div>
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_3[0].CLASS} - 분리수거</div>
            <div className="content">{sep_3[0].CONTENTS}</div>
          </div>
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>
        {/* 네 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_4[0].CLASS} - 분리수거</div>
            <div className="content">Tip! {sep_4[0].NOTE}</div>
          </div>
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>
        {/* 다섯 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_5[0].CLASS} - 분리수거</div>
            <div className="content">{sep_5[0].CONTENTS}
            <br/>Tip! {sep_5[0].NOTE}</div>
          </div>
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>
        {/* 여섯 번째 줄 */}
        <div className="Line">
          <div className="item-mid arrow-six">
          <div className="title">{sep_6[0].CLASS} - 분리수거</div>
            <div className="content">{sep_6[0].CONTENTS}
            <br/>Tip! {sep_6[0].NOTE}</div>
          </div>
          <div className="item-blank arrow-six">
            <div className="title"></div>
                <div className="content"></div>
          </div> 
        </div>


      </section>
    </section>
  );
};

