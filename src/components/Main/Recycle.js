import React, { useRef, useState } from 'react';
import './Recycle.scss';
import GeneralWaste from '../../images/recycleMenu_generalWaste.png';
import Bottle from '../../images/recycleMenu_Bottle.png';
import CanImage from '../../images/recycleMenu_Can.png';
import PlasticImage from '../../images/recycleMenu_Plastic.png';
import Vinyl from '../../images/recycleMenu_Vinyl.png';
import Styrofoam from '../../images/recycleMenu_Styrofoam.png';
import PaperImage from '../../images/recycleMenu_Paper.png';
import FoodWaste from '../../images/recycleMenu_Food.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Recycle = () => {

    const customSlider = useRef();

    const a_previous = () => {
        customSlider.current.slickPrev()
    }

    const a_next = () => {
        customSlider.current.slickNext()
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false

    };

    return (
        <section className="recycle" id="recycle">
            <div className="left-section">
                <h2 className="recycle-title">분리수거</h2>
                <div className="arrow-buttons">
                    <button className="left-button" onClick={a_previous}>←</button>
                    <button className="right-button" onClick={a_next}>→</button>
                </div>
            </div>
            <div className="right-section">
                    <Slider {...settings} ref={customSlider}>
                    <div className="recycle-item">
                        <Link to="/recycle/GeneralWaste">
                            <img src={GeneralWaste} alt="일반쓰레기" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="/recycle/GlassTrash">
                            <img src={Bottle} alt="유리병" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="/recycle/CannedGarbage">
                            <img src={CanImage} alt="캔류" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="/recycle/PlasticWaste">
                           <img src={PlasticImage} alt="플라스틱류" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="recycle/PlasticBags">
                            <img src={Vinyl} alt="비닐류" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="recycle/StyrofoamTrash">
                            <img src={Styrofoam} alt="스티로폼" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="/recycle/PaperWaste">
                           <img src={PaperImage} alt="종이류" />
                        </Link>
                    </div>
                    <div className="recycle-item">
                        <Link to="recycle/FoodWaste">
                            <img src={FoodWaste} alt="음식물쓰레기" />
                        </Link>
                    </div>
                    </Slider>
            </div>
        </section>
    );
};

export default Recycle;