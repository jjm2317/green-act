import React from 'react';
import './FoodWaste.scss';
import gen_food from "./json/gen_food.json";
import sep_food from "./json/sep_food.json";

//json파일이 food만 있어서 연습삼아 작성 - 참고해서 다른 카테고리 만들면 됨

export default function FoodWaste() {
//같은 클래스에 여러 CONTENTS가 있는 경우
  const sep_fru = sep_food.filter(function(data){return data.CLASS=="과일류"});
  const sep_vege = sep_food.filter(function(data){return data.CLASS=="채소류"});
  const fruit = gen_food.filter(function(data){return data.CLASS=="과일류"});
  const fruitData = fruit.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });
  const vege = gen_food.filter(function(data){return data.CLASS=="채소류"});
  const vegeData = vege.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });
  const meet = gen_food.filter(function(data){return data.CLASS=="육류"});
  const meetData = meet.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });
  const fish = gen_food.filter(function(data){return data.CLASS=="어패류"});
  const fishData = fish.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });
  const egg = gen_food.filter(function(data){return data.CLASS=="알류"});
  const eggData = egg.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });
  const tea = gen_food.filter(function(data){return data.CLASS=="티백,차"});
  const teaData = tea.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });
  const jang = gen_food.filter(function(data){return data.CLASS=="장류"});
  const jangData = jang.map((item)=>{
    return (
        <b>{item.CONTENTS}</b>
    );
  });


  return (  
    <section className="FoodWaste">
      <section className="top">
        <div className="title">
          <div className="title-text">음식물쓰레기</div>
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
            <div className="title">과일류 - 분리수거</div>
            <div className="content">
              <b>
              {sep_fru[0].CHARACTERISTICS}-
              {sep_fru[0].CONTENTS}
            </b>
            </div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">과일류 - 음식물쓰레기</div>
            <div className="content">{fruitData}</div>
          </div>
        </div>
        {/* 두 번째 줄 */}
        <div className="Line">
          <div className="item-short arrow-one">
            <div className="title">채소류 - 분리수거</div>
            <div className="content"><b>{sep_vege[0].CONTENTS}</b></div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">채소류 - 음식물쓰레기</div>
            <div className="content">{vegeData}</div>
          </div>

        </div>
        {/* 세 번째 줄 */}
        <div className="Line">
          <div className="blank-item-short arrow-five">
            <div className="title"></div>
            <div className="content"></div>
          </div>
          <div className="item-short arrow-one">
            <div className="title">육류 - 음식물쓰레기</div>
            <div className="content">{meetData}</div>
          </div>
        </div>
        {/* 네 번째 줄 */}
        <div className="Line">
          <div className="blank-item-short arrow-seven">
            <div className="title"></div>
            <div className="content"></div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">어패류 - 음식물쓰레기</div>
            <div className="content">{fishData}</div>
          </div>
        </div>
        {/* 다섯 번째 줄 */}
        <div className="Line">
          <div className="blank-item-short arrow-nine">
            <div className="title"></div>
            <div className="content"></div>
          </div>
          <div className="item-short arrow-one">
            <div className="title">알류 - 음식물쓰레기</div>
            <div className="content">{eggData}</div>
          </div>
        </div>
        {/* 여섯 번째 줄 */}
        <div className="Line">
          <div className="blank-item-short arrow-nine">
            <div className="title"></div>
            <div className="content"></div>
          </div>
          <div className="item-long arrow-six">
            <div className="title">티백,차 - 음식물쓰레기</div>
            <div className="content">{teaData}</div>
          </div>
        </div>
        {/* 일곱 번째 줄 */}
        <div className="Line">
          <div className="blank-item-short arrow-nine">
            <div className="title"></div>
            <div className="content"></div>
          </div>
          <div className="item-short arrow-one">
            <div className="title">장류 - 음식물쓰레기</div>
            <div className="content">{jangData}</div>
          </div>
        </div>

      </section>
    </section>
  );
};

