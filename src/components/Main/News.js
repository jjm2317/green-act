//정적 json파일 브라우저에 렌더링
//캐러셀 설치 npm install react-slick --save => npm install slick-carousel --save

import React from "react";
import "./News.scss";
import mainNews from "./mainNews";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function News() {
  const newsArrayData = mainNews.map((item, index) => {
      return (
        <li key={index}>
          <br/><img src={item.image_url}/>
          <hr/>
          <p>
          {item.title} 
          <a href={item.url}> 뉴스보기</a>
          </p>
        </li>
      );
    });

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed:2000,
  };
  
    return (
      <div className="news">
        {/* <ul className="container">{newsArrayData}</ul> */}
         <Slider {...settings}>
          <div>
            {newsArrayData[7]}
          </div>
          <div>
            {newsArrayData[6]}
          </div>
          <div>
            {newsArrayData[2]}
          </div>
          <div>
            {newsArrayData[3]}
          </div>
          <div>
            {newsArrayData[4]}
          </div>
          <div>
            {newsArrayData[5]}
          </div>
         </Slider>
      </div>
    );
  }
